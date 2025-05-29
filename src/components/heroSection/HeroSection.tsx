import { HeroContent } from "./HeroContents";
import { HeroImage } from "./HeroImage";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      id="about-me"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:flex-1 order-2 lg:order-1">
          <HeroContent />
        </div>
        <div className="lg:flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-none">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
