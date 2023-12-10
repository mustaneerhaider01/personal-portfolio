"use client";

import SkillItem from "./Skill";
import { motion } from "framer-motion";

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col max-w-screen-2xl text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-32 2xl:top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm 2xl:text-base">
        Hover over a skill for current proficiency
      </h3>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-5"
      >
        {skills?.map((skill) => (
          <SkillItem key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}
