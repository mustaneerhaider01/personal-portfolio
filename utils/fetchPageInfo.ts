import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

const fetchPageInfo = async () => {
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
};

export default fetchPageInfo;
