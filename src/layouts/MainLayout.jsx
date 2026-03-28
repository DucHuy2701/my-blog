import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CursorGlow from "../components/common/CursorGlow";
import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { motion, AnimatePresence } from "framer-motion";
import WebGLBackground from "../components/common/WebGLBackground";
import ShaderBackground from "../components/common/ShaderBackground";

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 🔥 APP CONTENT */}
          <div className="min-h-screen bg-softBg text-gray-800 dark:bg-darkBg dark:text-gray-100">
            <div className="relative">
              <WebGLBackground />
              {/* <ShaderBackground /> */}
              <CursorGlow />
              <div className="relative z-10">
                <Navbar />
                <main className="flex-1 max-w-5xl mx-auto px-4 py-6">
                  <Outlet />
                </main>
                <Footer />
              </div>
            </div>
          </div>
          {/* RouterProvider / Layout */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
