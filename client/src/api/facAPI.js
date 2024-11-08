import endpoint from "../config/config";
import { handleError, apiClient } from "../utils";

export const getFactorys = async () => {
  try {
    const response = await apiClient.get("/factorys");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching factory data:", err);
  }
};

export const getTopFactorys = async () => {
  try {
    const response = await apiClient.get("/factorys/top");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching top factory data:", err);
  }
};

export const insertFactory = async (formdata) => {
  try {
    const response = await apiClient.post("/factorys", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting factory:", err);
  }
};

export const updateFactory = async (id, formdata) => {
  try {
    const response = await apiClient.put(`/factorys/${id}`, formdata, {
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
    const response = await apiClient.delete(`/factorys/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting factory:", err);
  }
};
