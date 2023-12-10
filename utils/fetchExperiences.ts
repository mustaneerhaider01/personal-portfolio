import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
  }
`;

const fetchExperiences = async () => {
  const experiences: Experience[] = await client.fetch(query);
  return experiences;
};

export default fetchExperiences;
