import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      mt-20 border-t border-gray-200 
      dark:border-gray-800
      backdrop-blur-md bg-white/40 dark:bg-gray-900/40
    "
    >
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* LEFT */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Huy.dev
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm">

            <p><strong>Contact → </strong></p>
          {/* EMAIL */}
          <a
            href="mailto:leduchuy271@gmail.com"
            className="group relative text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            Email
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/huy2701"
            target="_blank"
            rel="noreferrer"
            className="group relative text-gray-700 dark:text-gray-300 hover:text-primary transition"
          >
            LinkedIn
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </a>

        </div>
      </div>
    </footer>
  );
}