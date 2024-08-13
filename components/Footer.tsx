"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

function Footer({ pageInfo }: Props) {
  const handleScrollToHeroSection = () => {
    const heroElement = document.getElementById("hero")!;
    heroElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <footer
      onClick={handleScrollToHeroSection}
      className="sticky bottom-5 w-full cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <Image
          src={urlForImage(pageInfo.profilePic).url()}
          alt={pageInfo.name}
          width={44}
          height={44}
          className="rounded-full object-cover h-11 w-11 filter grayscale hover:grayscale-0 cursor-pointer"
        />
      </div>
    </footer>
  );
}

export default Footer;
