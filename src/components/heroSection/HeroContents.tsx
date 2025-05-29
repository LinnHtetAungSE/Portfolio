import { Download } from "lucide-react";
import { Button } from "../common/Button";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 lg:gap-y-6">
      <p className="text-lg sm:text-xl font-semibold">Hi, I'm Linn Htet Aung</p>
      <p className="text-base sm:text-lg leading-relaxed text-gray-700">
        Full-Stack Software Engineer specializing in building scalable web
        applications with modern technologies like Next.js, Nuxt.js, TypeScript,
        Express.js, .NET and Spring Boot.
      </p>
      <Button className="w-fit flex items-center gap-x-3 text-sm sm:text-base font-semibold group">
        <Download size={18} className="group-hover:animate-bounce" />
        <span>Download Resume</span>
      </Button>
    </div>
  );
};
