import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"]
`;

const fetchSkills = async () => {
  const skills: Skill[] = await client.fetch(query);
  return skills;
};

export default fetchSkills;
