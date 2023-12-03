import axios from "axios";

// Will replace it by .env
const isLocal = window.location.hostname === "localhost";
const API_BASE_URL = isLocal
  ? "http://localhost:4200/api/auth"
  : "https://mern-shopping-8xpr.onrender.com/api/auth";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const loginUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
