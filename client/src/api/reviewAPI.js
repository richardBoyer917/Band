import axios from "axios";
import { handleError } from "../utils";

export const getReviews = async () => {
  try {
    const response = await axios.get("/reviews");
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching review data:", err);
  }
};

export const getReviewsBytype = async (reviewType) => {
  try {
    const response = await axios.get("/reviewsBytype", {
      params: { reviewType: reviewType },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error fetching review data:", err);
  }
};

export const insertReview = async (formdata) => {
  try {
    const response = await axios.post("/reviews", formdata);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error inserting review:", err);
  }
};

export const updateReview = async (id, formdata) => {
  try {
    const response = await axios.put(`/reviews/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error updating review:", err);
  }
};

export const deleteReview = async (_id) => {
  try {
    const response = await axios.delete(`/reviews/${_id}`);
    if (response.status !== 200)
      throw new Error(`Unexpected response status: ${response.status}`);
    return response.data;
  } catch (err) {
    handleError("Error deleting review:", err);
  }
};
