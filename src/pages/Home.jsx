import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/common/PageWrapper";
import { projects } from "../content/projects/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <PageWrapper>
      <div className="space-y-32">
        {/* HERO */}
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center relative px-4">
          {/* glow nhẹ lại */}
          <div className="absolute inset-0 blur-3xl opacity-10 bg-primary rounded-full w-72 h-72 mx-auto pointer-events-none"></div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-indigo-400 text-transparent bg-clip-text">
                Huy
              </span>
            </motion.h1>

            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
              Creating impactful web applications with clarity, performance, and
              purpose.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:scale-105 transition"
              >
                View Portfolio
              </Link>

              <a
                href="https://github.com/DucHuy2701"
                target="_blank"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-3xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a Web Application Developer currently transitioning from
            internship to fresher level. I focus on building modern web
            applications and integrating AI to solve real-world problems. My
            goal is to grow into a tech leader who builds impactful and scalable
            products.
          </p>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <div
                key={p.slug}
                className="p-5 rounded-xl border transition
                bg-white border-gray-200 hover:border-primary hover:shadow-md
                dark:bg-gray-900 dark:border-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {p.description}
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {p.tech?.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="max-w-3xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Skills
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            ReactJS, Tailwind, Bootstrap · NodeJS, Express · SQL Databases · AI
            Integration
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4 pb-30">
          <h2 className="text-xl text-gray-900 dark:text-white mb-5">
            Interested in working together?
          </h2>

          <Link
            to="/resume"
            className="rounded-xl px-6 py-2 bg-gradient-to-r from-primary to-indigo-400"
          >
            Check out my Resume
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
