import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        src={urlForImage(skill.image).url()}
        className="rounded-full border border-gray-500 object-contain w-16 h-16 md:w-24 md:h-24 
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition
      duration-300 ease-in-out w-16 h-16 md:w-24 md:h-24 rounded-full z-1"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
