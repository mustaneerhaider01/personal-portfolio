import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "social"]
`;

const fetchSocials = async () => {
  const socials: Social[] = await client.fetch(query);
  return socials;
};

export default fetchSocials;
