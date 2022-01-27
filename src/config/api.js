import axios from "axios";
import { API_URL } from "./constant";

export default axios.create({
    baseURL: API_URL
})