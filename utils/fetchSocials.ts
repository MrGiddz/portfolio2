import axios from "./axios";
import { Social } from "@/typings";

export const fetchSocials = async () => {
    const res = await axios.get("/api/socials");

     const socials: Social[] = res.data;

     return socials
}