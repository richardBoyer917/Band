import axios from "axios";
import { handleError } from "../utils";

export const getRental = async () => {
  try {
    const response = await axios.get("/rental");

    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error fetching rental data:", err);
  }
};

export const insertRental = async (formdata) => {
  try {
    const response = await axios.post("/rental", formdata);

    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error inserting rental:", err);
  }
};
