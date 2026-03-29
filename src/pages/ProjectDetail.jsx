import { useParams } from "react-router-dom";
import { projects } from "../content/projects/projects";
import PageWrapper from "../components/common/PageWrapper";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-16">

        {/* HERO */}
        <section>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            {project.description}
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <a href={project.demo} target="_blank" className="px-4 py-2 bg-primary text-white rounded-lg">
              Live Demo
            </a>
            <a href={project.github} target="_blank" className="px-4 py-2 border rounded-lg dark:border-gray-700">
              GitHub
            </a>
          </div>
        </section>

        {/* OVERVIEW */}
        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-gray-600 dark:text-gray-400">{project.overview}</p>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        {/* CHALLENGES */}
        <section>
          <h2 className="text-xl font-semibold">Challenges</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {/* SOLUTIONS */}
        <section>
          <h2 className="text-xl font-semibold">Solutions</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            {project.solutions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* RESULT */}
        <section className="pb-20">
          <h2 className="text-xl font-semibold">Result</h2>
          <p className="text-gray-600 dark:text-gray-400">{project.result}</p>
        </section>

      </div>
    </PageWrapper>
  );
}