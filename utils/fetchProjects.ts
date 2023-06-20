import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

const fetchProjects = async () => {
  const projects: Project[] = await client.fetch(query);
  return projects;
};

export default fetchProjects;
