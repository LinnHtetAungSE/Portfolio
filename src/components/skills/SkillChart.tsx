import { skills } from "@/config/skills.config";
import React from "react";

const SkillChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill) => {
        const percentage = (Number(skill.score) / 10) * 100;

        return (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-gray-500 text-sm ml-2">
                  (Since {skill.since})
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-1">{skill.score}</span>
                <span className="text-xs text-gray-400">/10</span>
              </div>
            </div>

            <div className="relative h-2.5 w-full rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-muted-blue"></div>
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-dark-blue transition-all duration-700 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
              {percentage > 30 && (
                <span className="absolute text-xs text-white right-1 top-1/2 transform -translate-y-1/2">
                  {percentage.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillChart;
