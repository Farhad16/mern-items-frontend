import axios from "axios";

const API_BASE_URL = "http://localhost:4200/api/items";

interface IItem {
  name: string;
  created_by: string;
}

export const createItem = async (itemData: IItem) => {
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

export const updateItem = async (id: string, updatedData: IItem) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/update/${id}`,
      updatedData
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteItem = async (id: string, created_by: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${id}`, {
      data: { created_by },
    });
    console.log("Item deleted successfully");
  } catch (error) {
    throw error;
  }
};
