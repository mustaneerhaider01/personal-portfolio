import React from "react";

type Props = {
  children: React.ReactNode;
  elementId: "about" | "experience" | "projects" | "contact";
};

function ScrollButton({ children, elementId }: Props) {
  const handleScrollToSection = () => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <button
      onClick={handleScrollToSection}
      className="px-6 py-2 border border-[#242424] uppercase rounded-full text-xs 
      tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 
      hover:text-[#F7AB0A]/40"
    >
      {children}
    </button>
  );
}

export default ScrollButton;
