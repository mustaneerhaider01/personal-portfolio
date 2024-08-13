import { cache } from "react";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "pageInfo"][0]
`;

const fetchPageInfo = cache(async () => {
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
});

export default fetchPageInfo;
