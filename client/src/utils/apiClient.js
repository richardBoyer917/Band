import axios from "axios";

const BASE_URL = "https://band-1.onrender.com";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
