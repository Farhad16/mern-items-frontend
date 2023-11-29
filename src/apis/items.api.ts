import axios from "axios";

const API_BASE_URL = "http://localhost:4200/api/items";

export const createItem = async (itemData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, itemData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getItems`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
