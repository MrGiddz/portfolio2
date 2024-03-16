import axios from "./axios";
import { Skill } from "@/typings";

export const fetchSkills = async () => {
    const res = await axios.get("/api/skills");

     const skills: Skill[] = res.data;

     return skills
}