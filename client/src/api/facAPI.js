import axios from "axios";
import endpoint from "../config/config";
import { handleError } from "../utils";

export const getFactorys = async () => {
  try {
    const response = await axios.get("/factorys");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching factory data:", err);
  }
};

export const getTopFactorys = async () => {
  try {
    const response = await axios.get("/factorys/top");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching top factory data:", err);
  }
};

export const insertFactory = async (formdata) => {
  try {
    const response = await axios.post("/factorys", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting factory:", err);
  }
};

export const updateFactory = async (id, formdata) => {
  try {
    const response = await axios.put(`/factorys/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error updating factory:", err);
  }
};

export const deleteFactory = async (_id) => {
  try {
    const response = await axios.delete(`/factorys/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting factory:", err);
  }
};
