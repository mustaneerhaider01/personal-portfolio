"use client";

import SkillItem from "./Skill";
import { motion } from "framer-motion";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left 
    max-w-screen-2xl mx-auto xl:px-10 justify-center items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500 
      text-xl md:text-2xl"
      >
        Skills
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillItem key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillItem key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
