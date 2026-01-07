import { Link } from "react-router-dom";
import { projects } from "../Data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl tracking-widest font-bold text-white">
            PROJECTS
          </h2>
          <div className="w-14 h-[2px] bg-white mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((p) => (
            <div key={p.id} className="border border-white/60 p-6">
              <div className="border border-white/40 mb-6">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
              </div>

              <h3 className="text-sm font-bold mb-2">{p.name}</h3>
              <p className="text-xs text-gray-400 mb-6 line-clamp-3">
                {p.description}
              </p>

              <Link
                to={`/projects/${p.id}`}
                className="inline-block border border-white px-4 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition"
              >
                VIEW MORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}