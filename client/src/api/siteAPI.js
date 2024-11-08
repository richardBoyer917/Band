import axios from "axios";
import { handleError } from "../utils";

export const getSite = async () => {
  try {
    const response = await axios.get("/sites");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const getsixSite = async () => {
  try {
    const response = await axios.get("/sites/six");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const getSiteById = async (id) => {
  try {
    const response = await axios.get(`/sites/${id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const insertSite = async (formdata) => {
  try {
    const response = await axios.post("/sites", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting site:", err);
  }
};

export const updateSite = async (id, formdata) => {
  try {
    const response = await axios.put(`/sites/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error updating site:", err);
  }
};

export const deleteSite = async (_id) => {
  try {
    const response = await axios.delete(`/sites/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting site:", err);
  }
};
