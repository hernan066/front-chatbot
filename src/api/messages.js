import axios from "axios";

const API = process.env.REACT_APP_API || "http://localhost:3030";

export const getMessagesByNumber = async (number, limit, init) => {
  const { data } = await axios.get(`${API}/api/message/${number}?init=${init}&limit=${limit}`);
  return data;
};

export const getMessages = async (init, limit) => {
  
    console.log(init, limit)
  
    const { data } = await axios.get(`${API}/api/message?init=${init}&limit=${limit}`);
  
  return data;
};

