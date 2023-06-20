"use client";

import { motion } from "framer-motion";
import Project from "./Project";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden
      text-left max-w-full mx-auto justify-evenly items-center z-0"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl 
      md:text-2xl"
      >
        Projects
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
        z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <Project
            key={i}
            project={project}
            totalProjects={projects.length}
            projectPosition={i + 1}
          />
        ))}
      </div>

      <div
        className="absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] 
      2xl:h-[500px] -skew-y-12"
      />
    </motion.div>
  );
}

export default Projects;
