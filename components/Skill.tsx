import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  skill: Skill;
};

export default function SkillItem({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        width={64}
        height={64}
        className="rounded-full border border-gray-500 object-contain w-16 h-16 lg:w-20 lg:h-20 
        2xl:w-24 2xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlForImage(skill.image).url()}
        alt="Skill"
      />

      <div
        className="absolute opacity-0 z-1 rounded-full group-hover:opacity-80 transition duration-300 
        ease-in-out group-hover:bg-white w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-xl xl:text-2xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
