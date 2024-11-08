import axios from "axios";
import { handleError } from "../utils";

export const getEquips = async () => {
  try {
    const response = await axios.get("/equipments");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error fetching equipment data:", err);
  }
};

export const getEquipsByType = async (equipmentType) => {
  try {
    const response = await axios.get("/equipments/type", {
      params: { equipmentType: equipmentType },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error fetching equipment data by type:", err);
  }
};

export const insertEquip = async (formdata) => {
  try {
    const response = await axios.post("/equipments", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error inserting equipment:", err);
  }
};

export const updateEquip = async (id, formdata) => {
  try {
    const response = await axios.put(`/equipments/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error updating equipment:", err);
  }
};

export const deleteEquip = async (_id) => {
  try {
    const response = await axios.delete(`/equipments/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);

    return response.data;
  } catch (err) {
    handleError("Error deleting equipment:", err);
  }
};

export const getEquipById = async (id) => {
  try {
    const response = await axios.get(`/equipments/${id}`);
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
    return response.data;
  } catch (err) {
    handleError("Error fetching equipment by ID:", err);
  }
};
