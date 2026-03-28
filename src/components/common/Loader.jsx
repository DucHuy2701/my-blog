import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* 🌈 BACKGROUND GLOW LAYER */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
      />

      {/* ✨ CONTENT */}
      <div className="relative z-10 text-center">
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text"
        >
          Huy.dev
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500 dark:text-gray-400 mt-3"
        >
          Crafting experience...
        </motion.p>

        {/* PROGRESS BAR */}
        <div className="mt-8 w-48 h-[6px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary to-green-400"
          />
        </div>

        {/* DOTS LOADING */}
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>

        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
      </div>
    </div>
  );
}
