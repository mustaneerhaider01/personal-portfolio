import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == "social"]
`;

export async function GET(req: Request) {
  const socials: Social[] = await client.fetch(query);
  return NextResponse.json({ socials });
}
