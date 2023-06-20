export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, {
    next: { revalidate: 10 },
  });

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
