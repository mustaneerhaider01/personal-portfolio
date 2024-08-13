import { cache } from "react";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

const fetchProjects = cache(async () => {
  const projects: Project[] = await client.fetch(query);
  return projects;
});

export default fetchProjects;
