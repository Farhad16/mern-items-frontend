import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:4200/api/auth";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    Cookies.set("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const loginUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    Cookies.set("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error: any) {
    throw error;
  }
};