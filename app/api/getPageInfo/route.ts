import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "pageInfo"][0]
`;

export async function GET(req: Request) {
  const pageInfo: PageInfo = await client.fetch(query);
  return NextResponse.json({ pageInfo });
}
