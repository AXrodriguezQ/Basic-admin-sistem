import { DBURL, enpointUsers } from "../constants.js";

export const register = async (nameUser, email, password) => {
  try {
    const dataUsers = {
      id: Math.floor(Math.random() * 100) + 1,
      name: nameUser,
      email,
      password,
    };

    await axios.post(DBURL + enpointUsers, dataUsers);
    return true; 
  } catch (error) {
    console.log(error);
    return false;
  }
};