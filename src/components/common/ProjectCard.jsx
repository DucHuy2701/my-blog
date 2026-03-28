import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative border rounded-xl p-5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md hover:shadow-xl transition overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-primary/10 to-green-400/10"></div>

      <div className="relative z-10">
        {/* 🔥 HEADER */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">{p.name}</h2>

          {/* TYPE */}
          <span className="text-xs text-gray-400">{p.type}</span>
        </div>

        {/* ⭐ FEATURED */}
        {p.featured && (
          <div className="text-xs text-green-500 mt-1">★ Featured</div>
        )}

        {/* 📝 DESCRIPTION */}
        <p className="text-sm text-gray-500 mt-3">{p.description}</p>

        {/* 🏷️ TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔗 LINKS */}
        <div className="flex gap-4 mt-4 text-sm">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          )}

          {p.demo && p.demo !== "#" && (
            <a
              href={p.demo}
              target="_blank"
              className="text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
