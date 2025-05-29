import { featureProjects } from "@/config/projects.config";
import ProjectCard from "./ProjectCard";

export const FeatureProjectsSection: React.FC = () => {
  return (
    <section className="w-full rounded-3xl py-8 px-6 pt-24" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
