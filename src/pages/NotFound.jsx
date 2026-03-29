import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/common/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4">

        <div className="relative space-y-6">

          {/* 🔥 Glow background */}
          <div className="absolute inset-0 blur-3xl opacity-10 bg-primary w-72 h-72 mx-auto rounded-full pointer-events-none"></div>

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-7xl font-extrabold
            bg-gradient-to-r from-primary to-indigo-400
            text-transparent bg-clip-text"
          >
            404
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Page not found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-md mx-auto"
          >
            The page you're looking for doesn’t exist or has been moved.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mt-6"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:scale-105 transition"
            >
              Back Home
            </Link>

            <Link
              to="/portfolio"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Portfolio
            </Link>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}