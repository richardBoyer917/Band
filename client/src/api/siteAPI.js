import { handleError, apiClient } from "../utils";

export const getSite = async () => {
  try {
    const response = await apiClient.get("/sites");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const getsixSite = async () => {
  try {
    const response = await apiClient.get("/sites/six");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const getSiteById = async (id) => {
  try {
    const response = await apiClient.get(`/sites/${id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching site data:", err);
  }
};

export const insertSite = async (formdata) => {
  try {
    const response = await apiClient.post("/sites", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting site:", err);
  }
};

export const updateSite = async (id, formdata) => {
  try {
    const response = await apiClient.put(`/sites/${id}`, formdata, {
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
    const response = await apiClient.delete(`/sites/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting site:", err);
  }
};
