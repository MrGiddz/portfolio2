import axios from "./axios";
import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await axios.get("/api/pageInfo");
     const pageInfo: PageInfo = res.data;

     return pageInfo
}