import { handleError, apiClient } from "../utils";

export const login = async (formdata) => {
  try {
    const response = await apiClient.post("/admin/login", formdata, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (err) {
    handleError("Error logging in user:", err);
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await apiClient.post("/admin/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    localStorage.removeItem("token");
    return response.data;
  } catch (err) {
    handleError("Error logging out user:", err);
  }
};
