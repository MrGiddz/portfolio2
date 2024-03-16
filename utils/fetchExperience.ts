import { Experience } from "@/typings";
import axios from "./axios";

export const fetchExperience = async () => {
    const res = await axios.get("/api/experience");

     const experience: Experience[] = res.data;

     return experience
}