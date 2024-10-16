import { DBURL, enpointUsers } from "../constants.js";

export const login = async (email, password) => {

  let response = false;
  
  const dataUsers = await axios.get(DBURL+enpointUsers);
  
  for (let i = 0; i < dataUsers.data.length; i++) {
    if ( dataUsers.data[i].email === email && dataUsers.data[i].password === password ) response = true;
  }
  
  return response
  
}