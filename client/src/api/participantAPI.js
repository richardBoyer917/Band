import { handleError, apiClient } from "../utils";

export const getParticipant = async () => {
  try {
    const response = await apiClient.get("/participant");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching participant data:", err);
  }
};

export const getShowParticipant = async (num) => {
  try {
    const response = await apiClient.get(
      `/showparticipant?participantNum=${num}`
    );
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error fetching participant data:", err);
  }
};

export const insertParticipant = async (formdata) => {
  try {
    const response = await apiClient.post("/participant", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting participant:", err);
  }
};

export const updateParticipant = async (id, formdata) => {
  try {
    const response = await apiClient.put(`/participant/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error updating participant:", err);
  }
};

export const deleteParticipant = async (_id) => {
  try {
    const response = await apiClient.delete(`/participant/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error deleting participant:", err);
  }
};
