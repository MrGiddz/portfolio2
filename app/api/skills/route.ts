import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

export async function GET(req: Request) {
    const query = groq`*[_type == "skill"]`;

    const skills: Skill[] = await sanityClient.fetch(query);
  return NextResponse.json(skills);
}
