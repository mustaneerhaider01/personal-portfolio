import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};
export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] lg:w-[650px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-[130px] 2xl:h-[130px] rounded-full object-contain"
        src={urlForImage(experience?.companyImage).url()}
      />

      <div className="xl:px-10">
        <h4 className="text-xl md:text-2xl 2xl:text-4xl font-light">
          {experience?.jobTitle}
        </h4>

        <p className="font-bold md:text-lg 2xl:text-2xl mt-1">
          {experience?.company}
        </p>

        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology, i) => (
            <Image
              key={i}
              height={32}
              width={32}
              className="h-8 w-8 lg:h-12 lg:w-12 rounded-full object-contain"
              src={urlForImage(technology.image).url()}
              alt="Experience"
            />
          ))}
        </div>

        <p className="uppercase text-xs md:text-base py-2 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
        </p>

        <ul className="list-disc space-y-2 lg:space-y-4 ml-5 text-xs md:text-base">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
