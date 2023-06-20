import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[300px] 
      md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 
      cursor-pointer transition-opacity overflow-hidden"
    >
      <motion.img
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={urlForImage(experience.companyImage).url()}
        className="h-24 w-24 rounded-full xl:w-[110px] xl:h-[110px] object-cover"
      />

      <div className="md:px-6">
        <h4 className="text-xl md:text-2xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-base md:text-xl mt-1">
          {experience.company}
        </p>

        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <Image
              key={tech._id}
              src={urlForImage(tech.image).url()}
              alt={tech.title}
              width={30}
              height={30}
              className="object-contain"
            />
          ))}
        </div>

        <p className="uppercase py-4 text-gray-300 text-sm">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-3 ml-5 text-sm">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
