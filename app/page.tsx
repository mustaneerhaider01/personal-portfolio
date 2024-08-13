import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "@/utils";

export const revalidate = 10;

export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  const experiences = await fetchExperiences();

  return (
    <main
      className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Footer pageInfo={pageInfo} />
    </main>
  );
}
