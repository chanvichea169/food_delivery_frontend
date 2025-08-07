import axios from "axios";
import { User } from "../types/User";

const BASE_URL = "http://localhost:8080/api";

export const createUser = async (user: User) => {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
};
