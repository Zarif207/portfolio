import { Link } from "react-router-dom";
import { projects } from "../Data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl tracking-widest font-bold text-white">
            PROJECTS
          </h2>
          <div className="w-14 h-[2px] bg-white mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((p) => {
            const isOngoing = p.status === "ongoing";

            return (
              <div
                key={p.id}
                className={`border p-6 transition ${
                  isOngoing
                    ? "border-yellow-500/40 opacity-80"
                    : "border-white/60"
                }`}
              >
                {/* Image with overlay */}
                <div className="relative border border-white/40 mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`h-40 w-full object-cover ${
                      isOngoing ? "blur-[1px] brightness-50" : ""
                    }`}
                  />
                  {isOngoing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500 text-[10px] tracking-widest px-3 py-1 uppercase">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                        </span>
                        In Progress
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-bold mb-2">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-6 line-clamp-3">
                  {p.description}
                </p>

                {isOngoing ? (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 px-4 py-2 text-xs tracking-widest cursor-not-allowed select-none"
                  >
                    🚧 Working on it
                  </button>
                ) : (
                  <Link
                    to={`/projects/${p.id}`}
                    className="inline-block border border-white px-4 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition"
                  >
                    DETAILS →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
