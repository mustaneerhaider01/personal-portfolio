import { cache } from "react";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "social"]
`;

const fetchSocials = cache(async () => {
  const socials: Social[] = await client.fetch(query);
  return socials;
});

export default fetchSocials;
