import React from "react";
import { Experience } from "@/type";

export const ExperienceCard: React.FC<Experience> = ({
  date,
  title,
  company,
  description,
  skills,
}) => {
  return (
    <div className="bg-soft-cream shadow-md rounded-lg p-6 relative">
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-lg font-semibold text-gray-800 mt-1">{title}</h3>
      <p className="text-sm text-gray-600 italic">{company}</p>
      <p className="text-sm text-gray-700 mt-4">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs bg-dark-blue text-white rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
