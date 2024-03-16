import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

export async function GET(req: Request) {
    const query = groq`*[_type == "project"]{
        ...,
        technologies[]->
      }`;

    const projects: Project[] = await sanityClient.fetch(query);
  return NextResponse.json(projects);
}
