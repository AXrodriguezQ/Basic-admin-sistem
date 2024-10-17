import { DBURL, enpointProducts } from "../constants.js";

export const addProducts = async (data) => {
  try {
    await axios.post(DBURL + enpointProducts, data);
    return true; 
  } catch (error) {
    console.log(error);
    return false;
  }
};