import { FeatureProject } from "@/type";
import { ArrowDownToDot, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard: React.FC<{ project: FeatureProject }> = ({ project }) => {
  return (
    <div className="bg-soft-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={project.imgUrl}
          alt={project.name}
          fill
          className="object-top"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <span className="text-gray-500 text-sm">({project.year})</span>
        </div>

        <p className="text-gray-600 mb-4">{project.peekDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-blue text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.gitHubLink && (
            <Link
              href={project.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted-blue p-1.5 rounded-full"
            >
              <Github size={20} />
            </Link>
          )}
          {project.websiteLink && (
            <Link
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-x-1 items-center text-white bg-muted-blue px-4 rounded-full"
            >
              <ArrowDownToDot size={15} />
              <span className="text-sm">Visit</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
