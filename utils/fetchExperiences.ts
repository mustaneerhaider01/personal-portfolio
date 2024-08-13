import { cache } from "react";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
  }
`;

const fetchExperiences = cache(async () => {
  const experiences: Experience[] = await client.fetch(query);
  return experiences;
});

export default fetchExperiences;
