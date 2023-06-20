import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function GET(req: Request) {
  const experiences: Experience[] = await client.fetch(query);
  return NextResponse.json({ experiences });
}
