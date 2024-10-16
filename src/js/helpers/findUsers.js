import { DBURL, enpointUsers } from "../constants.js"

export const existUser = async (email) => {

  let response = false;

  const dataUsers = await axios.get(DBURL+enpointUsers);

  for (let i = 0; i < dataUsers.data.length; i++) {
    if ( dataUsers.data[i].email === email ) response = true;
  }

  return response

}
