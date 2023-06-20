"use client";

import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
  max-w-7xl mx-auto px-10 justify-evenly items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl 
      md:text-2xl"
      >
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={urlForImage(pageInfo.profilePic).url()}
        className="-mb-24 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg
        md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-6 md:space-y-10 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>

        <p className="text-sm md:text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
