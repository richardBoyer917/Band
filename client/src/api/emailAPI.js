import axios from "axios";
import { handleError } from "../utils";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post("/sendEmail", data);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error sending email:", err);
  }
};
