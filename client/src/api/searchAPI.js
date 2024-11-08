import axios from "axios";
import { handleError } from "../utils";

export const getSearchData = async (searchTerm) => {
  try {
    const response = await axios.post("/getSearchData", {
      searchTerm: searchTerm,
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching search data:", err);
  }
};
