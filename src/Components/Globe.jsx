import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Bangladesh (Kishoreganj) lat/lon
const BD_LAT = 24.44;
const BD_LON = 90.78;

function latLonToVec3(lat, lon, r = 1) {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

/* ── DARK GLOBE SPHERE ───────────────────────── */
function GlobeSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#0d1117"
        roughness={1}
        metalness={0}
        transparent
        opacity={1}
      />
    </mesh>
  );
}

/* ── GRID LINES ──────────────────────────────── */
function GlobeGrid() {
  const geo = useMemo(() => {
    const g   = new THREE.BufferGeometry();
    const pts = [];

    // latitude rings every 30°
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lon = 0; lon <= 360; lon += 1.5) {
        const v = latLonToVec3(lat, lon, 1.005);
        pts.push(v.x, v.y, v.z);
      }
    }
    // longitude meridians every 30°
    for (let lon = 0; lon < 360; lon += 30) {
      for (let lat = -90; lat <= 90; lat += 1.5) {
        const v = latLonToVec3(lat, lon, 1.005);
        pts.push(v.x, v.y, v.z);
      }
    }

    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#ffffff" opacity={0.07} transparent />
    </lineSegments>
  );
}

/* ── DOT LAND MASS (procedural) ─────────────── */
// Approximate land regions as lat/lon bounding boxes
const LAND_BOXES = [
  // North America
  [25, 75, -170, -50],
  // South America
  [-55, 15, -82, -34],
  // Europe
  [35, 72, -12, 45],
  // Africa
  [-35, 38, -20, 52],
  // Asia (main)
  [5, 75, 45, 150],
  // Southeast Asia
  [-10, 25, 95, 145],
  // Australia
  [-45, -10, 112, 155],
  // Greenland
  [60, 84, -58, -18],
  // Japan
  [30, 46, 128, 148],
  // UK/Ireland
  [50, 60, -10, 2],
];

function DotLand() {
  const geo = useMemo(() => {
    const g   = new THREE.BufferGeometry();
    const pts = [];

    LAND_BOXES.forEach(([latMin, latMax, lonMin, lonMax]) => {
      const latStep = 3.5;
      const lonStep = 3.5;
      for (let lat = latMin; lat <= latMax; lat += latStep) {
        for (let lon = lonMin; lon <= lonMax; lon += lonStep) {
          // add slight jitter so it looks organic
          const jLat = lat + (Math.random() - 0.5) * 1.5;
          const jLon = lon + (Math.random() - 0.5) * 1.5;
          const v = latLonToVec3(jLat, jLon, 1.012);
          pts.push(v.x, v.y, v.z);
        }
      }
    });

    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <points geometry={geo}>
      <pointsMaterial
        color="#4fffb0"
        size={0.018}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

/* ── ATMOSPHERE GLOW ─────────────────────────── */
function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.12, 48, 48]} />
      <meshStandardMaterial
        color="#00ff9f"
        transparent
        opacity={0.03}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ── LOCATION PIN ────────────────────────────── */
function LocationPin() {
  const dotRef  = useRef();
  const ring1   = useRef();
  const ring2   = useRef();
  const pos = latLonToVec3(BD_LAT, BD_LON, 1.04);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (dotRef.current)
      dotRef.current.material.opacity = 0.7 + 0.3 * Math.sin(t * 3);

    if (ring1.current) {
      const s = 1 + 0.8 * ((t * 1.5) % 1);
      ring1.current.scale.set(s, s, s);
      ring1.current.material.opacity = 0.7 * (1 - (t * 1.5) % 1);
    }
    if (ring2.current) {
      const s = 1 + 0.8 * (((t * 1.5) + 0.5) % 1);
      ring2.current.scale.set(s, s, s);
      ring2.current.material.opacity = 0.7 * (1 - ((t * 1.5) + 0.5) % 1);
    }
  });

  // orient rings to face outward from sphere surface
  const normal = pos.clone().normalize();
  const up     = new THREE.Vector3(0, 1, 0);
  const quat   = new THREE.Quaternion().setFromUnitVectors(up, normal);

  return (
    <group position={[pos.x, pos.y, pos.z]}>
      {/* core dot */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.022, 10, 10]} />
        <meshBasicMaterial color="#00ff9f" transparent />
      </mesh>
      {/* ripple ring 1 */}
      <mesh ref={ring1} quaternion={quat}>
        <ringGeometry args={[0.028, 0.04, 24]} />
        <meshBasicMaterial color="#00ff9f" transparent side={THREE.DoubleSide} />
      </mesh>
      {/* ripple ring 2 — offset phase */}
      <mesh ref={ring2} quaternion={quat}>
        <ringGeometry args={[0.028, 0.04, 24]} />
        <meshBasicMaterial color="#00ff9f" transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

/* ── SCENE ───────────────────────────────────── */
function Scene() {
  // Orient camera to face Bangladesh on load
  // BD is at lon ~90° east → in Three.js coords that's roughly -X side
  // We set initial azimuth via target rotation in OrbitControls
  const controlsRef = useRef();

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 2, 3]}   intensity={0.5} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={0.2} color="#00ff9f" />

      <GlobeSphere />
      <GlobeGrid />
      <DotLand />
      <Atmosphere />
      <LocationPin />

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        rotateSpeed={0.5}
        dampingFactor={0.05}
        enableDamping
      />
    </>
  );
}

/* ── EXPORT ──────────────────────────────────── */
export default function GlobeCanvas() {
  // Position camera so Bangladesh faces viewer on load
  // BD lon ~90° → azimuth offset
  return (
    <Canvas
      camera={{ position: [-0.6, 0.4, 2.5], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.NoToneMapping,
      }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
