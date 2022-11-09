import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const loginUser = async (endpoint, body) => {
  console.log('chamando', endpoint, body);
  const { data } = await axios.get((baseURL + endpoint), body);
  console.log('depois de chamar', data);
  return data;
};

const createUserProvider = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

export {
  loginUser,
  createUserProvider,
};
