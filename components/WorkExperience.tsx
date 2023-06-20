"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden
    text-left px-10 max-w-full mx-auto justify-evenly items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl 
      md:text-2xl"
      >
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 mt-10 snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
