import { DBURL, enpointBills } from "../constants.js";

export const addBills = async (data) => {
  try {
    await axios.post(DBURL + enpointBills, data);
    return true; 
  } catch (error) {
    console.log(error);
    return false;
  }
};