import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/config/experience.config";

const WorkExperience: React.FC = () => {
  return (
    <section className="bg-pale-blue pb-12 pt-24" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
          Work Experiences
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-0 md:pl-8" : "md:pl-0 md:pr-8"
                }`}
              >
                <div
                  className={`absolute top-6 h-4 w-4 rounded-full bg-dark-blue z-10 
                  ${
                    index % 2 === 0
                      ? "left-[7.5px] md:left-1/2 md:-ml-2"
                      : "left-[7.5px] md:left-1/2 md:-ml-2"
                  }`}
                ></div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "ml-8 md:ml-auto md:pr-8 md:mr-8"
                      : "ml-8 md:pl-8 md:mr-8"
                  }`}
                >
                  <ExperienceCard {...exp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
