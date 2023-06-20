import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export async function GET(req: Request) {
  const projects: Project[] = await client.fetch(query);
  return NextResponse.json({ projects });
}
