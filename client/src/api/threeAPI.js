import axios from "axios";
import { handleError } from "../utils";

export const getThrees = async () => {
  try {
    const response = await axios.get("/threes");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching three data:", err);
  }
};

export const insertThree = async (formdata) => {
  try {
    const response = await axios.post("/threes", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting three:", err);
  }
};

export const updateThree = async (id, formdata) => {
  try {
    const response = await axios.put(`/threes/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error updating three:", err);
  }
};

export const deleteThree = async (_id) => {
  try {
    const response = await axios.delete(`/threes/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting three:", err);
  }
};
