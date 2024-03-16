import axios from "./axios";
import { Project } from "@/typings";

export const fetchProjects = async () => {
    const res = await axios.get("/api/projects");

     const projects: Project[] = res.data;

     return projects
}