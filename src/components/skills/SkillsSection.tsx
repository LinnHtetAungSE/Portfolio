import SkillChart from "./SkillChart";

export const SkillsSection: React.FC = () => {
  return (
    <section className="px-6">
      <div className="w-full rounded-3xl py-8 px-6 bg-soft-cream shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Skills Measurement
        </h2>
        <SkillChart />
      </div>
    </section>
  );
};
