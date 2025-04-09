import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  return (
    <Link href={path} className="w-full block group hover:scale-105 transition-transform duration-300">
      <div className="wow fadeInUp p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </Link>
  );
};

export default SingleFeature;
