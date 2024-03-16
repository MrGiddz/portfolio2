import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

export async function GET(req: Request) {
    const query = groq`*[_type == "experience"]{
        ...,
        technologies[]->
      }`;

    const experience: Experience[] = await sanityClient.fetch(query);
  return NextResponse.json(experience);
}
