import { projects } from "../content/projects/projects";
import ProjectCard from "../components/common/ProjectCard";
import PageWrapper from "../components/common/PageWrapper";

export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Portfolio
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          A collection of web applications I’ve built, focusing on performance,
          user experience, and real-world problem solving.
        </p>

        <p className="text-gray-300 dark:text-gray-200">
          Any contacts please visit my Linkedin:<br/>
          <strong>www.linkedin.com/in/huy2701</strong>
        </p>

      </div>
      <div className="border p-5 rounded-xl hover:border-primary hover:shadow-md transition">
        <h2 className="text-xl font-semibold mb-3">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-3">Other Projects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
