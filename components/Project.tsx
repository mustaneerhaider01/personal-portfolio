import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
  totalProjects: number;
  projectPosition: number;
};

function Project({ totalProjects, projectPosition, project }: Props) {
  return (
    <Link target="_blank" href={project.linkToBuild}>
      <div
        className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center 
    space-y-5 p-10 md:p-20 h-screen"
      >
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          src={urlForImage(project.image).url()}
          alt="Project"
          className="w-[350px] h-[200px] md:w-[400px] md:h-[200px]"
        />

        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
          <h4 className="text-2xl md:text-3xl font-semibold text-center">
            <span className="underline decoration-[#F7AB0A]/50">
              Case Study {projectPosition} of {totalProjects}:
            </span>{" "}
            {project.title}
          </h4>

          <div className="flex space-x-4 justify-center">
            {project.technologies.map((tech) => (
              <Image
                key={tech._id}
                src={urlForImage(tech.image).url()}
                alt={tech.title}
                width={40}
                height={40}
                className="object-contain hover:animate-bounce"
              />
            ))}
          </div>

          <p className="text-center md:text-left text-sm md:text-base">
            {project.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Project;
