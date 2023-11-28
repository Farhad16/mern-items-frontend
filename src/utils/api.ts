import axios from "axios";

const API_BASE_URL = "http://localhost:4200/api/auth";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
