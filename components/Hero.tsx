"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import ScrollButton from "./ScrollButton";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name}`,
      "Full Stack Engineer",
      "React.js | Next.js | Node.js | TypeScript",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-12 items-center justify-center 
      text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative h-[110px] w-[110px] mx-auto rounded-full overflow-hidden">
        <Image
          src={urlForImage(pageInfo.heroImage).url()}
          alt="Avatar"
          fill
          className="object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase tracking-[15px] pb-2">
          {pageInfo.role}
        </h2>

        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <ScrollButton elementId="about">About</ScrollButton>
          <ScrollButton elementId="experience">Experience</ScrollButton>
          <ScrollButton elementId="projects">Projects</ScrollButton>
          <ScrollButton elementId="contact">Contact</ScrollButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
