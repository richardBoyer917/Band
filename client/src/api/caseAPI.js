import { handleError, apiClient } from "../utils";

export const getCases = async () => {
  try {
    const response = await apiClient.get(`/cases`);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error fetching cases:", err);
  }
};

export const getCaseById = async (id) => {
  try {
    const response = await apiClient.get(`/cases/${id}`);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error fetching case by ID:", err);
  }
};

export const insertCase = async (formdata) => {
  try {
    const response = await apiClient.post(`/cases`, formdata);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error inserting case:", err);
  }
};

export const updateCase = async (id, formdata) => {
  try {
    const response = await apiClient.put(`/cases/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error updating case:", err);
  }
};

export const deleteCase = async (_id) => {
  try {
    const response = await apiClient.delete(`/cases/${_id}`);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error deleting case:", err);
  }
};

export const insertSolution = async (formdata) => {
  try {
    const response = await apiClient.post(`/cases/solution`, formdata);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error inserting solution:", err);
  }
};

export const getCasesWithCheckbox = async (checkboxValue, num) => {
  try {
    const response = await apiClient.get(`/cases/checkbox`, {
      params: { checkboxValue, casesNum: num },
    });
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error fetching cases with checkbox:", err);
  }
};

export const getCasesByType = async (caseType) => {
  try {
    const response = await apiClient.get(`/cases/type`, {
      params: { caseType },
    });
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error fetching cases by type:", err);
  }
};
