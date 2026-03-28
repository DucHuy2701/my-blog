import { Link, NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="font-bold text-lg text-primary tracking-tight"
        >
          Huy.dev
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm font-medium">

          {/* HOME */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-700 dark:text-gray-300 hover:text-primary"
            }
          >
            <span className="relative group cursor-pointer">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          {/* BLOG */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-700 dark:text-gray-300 hover:text-primary"
            }
          >
            <span className="relative group cursor-pointer">
              Blog
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          {/* PORTFOLIO */}
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-700 dark:text-gray-300 hover:text-primary"
            }
          >
            <span className="relative group cursor-pointer">
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>

          {/* TOGGLE THEME */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 text-lg hover:scale-110 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}