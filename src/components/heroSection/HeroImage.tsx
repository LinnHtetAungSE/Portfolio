import Image from "next/image";

export const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 aspect-square">
      <Image
        src="/profile-image.png"
        alt="Linn Htet Aung - Full-Stack Engineer"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
