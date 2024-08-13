import { cache } from "react";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "skill"]
`;

const fetchSkills = cache(async () => {
  const skills: Skill[] = await client.fetch(query);
  return skills;
});

export default fetchSkills;
