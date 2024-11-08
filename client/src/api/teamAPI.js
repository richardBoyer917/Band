import axios from "axios";
import { handleError } from "../utils";

export const getTeam = async () => {
  try {
    const response = await axios.get("/team");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching team data:", err);
  }
};

export const insertTeam = async (formdata) => {
  try {
    const response = await axios.post("/team", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting team:", err);
  }
};
