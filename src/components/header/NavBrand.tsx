import Link from "next/link";

export const NavBrand: React.FC = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center font-bold text-dark-blue text-xl hover:text-sky-900 transition-colors duration-200"
    >
      Linn Htet.
    </Link>
  );
};
