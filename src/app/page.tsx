import { ContactSection } from "@/components/contact/ContactSection";
import { WorkHistories } from "@/components/experience/WorkHistories";
import { HeroSection } from "@/components/heroSection/HeroSection";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { LibraryHubSection } from "@/components/projects/LibraryHubSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <SkillsSection />
      <WorkHistories />
      <FeaturedProjectsSection />
      <LibraryHubSection />
      <ContactSection />
    </main>
  );
}
