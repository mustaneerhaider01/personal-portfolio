import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "skill"]
`;

export async function GET(req: Request) {
  const skills: Skill[] = await client.fetch(query);
  return NextResponse.json({ skills });
}
