import { handleError, apiClient } from "../utils";

export const getThrees = async () => {
  try {
    const response = await apiClient.get("/threes");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching three data:", err);
  }
};

export const insertThree = async (formdata) => {
  try {
    const response = await apiClient.post("/threes", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting three:", err);
  }
};

export const updateThree = async (id, formdata) => {
  try {
    const response = await apiClient.put(`/threes/${id}`, formdata, {
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
    const response = await apiClient.delete(`/threes/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting three:", err);
  }
};
