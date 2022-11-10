import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const loginUser = async (endpoint, body) => {
  console.log('chamando', endpoint, body);
  const { data } = await axios.get((baseURL + endpoint), body);
  console.log('depois de chamar', data);
  return data;
};

const createUser = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

const getGroup = async (endpoint, params) => {
  console.log(`${baseURL}${endpoint}${params}`);
  const { data } = await axios.get(`${baseURL}${endpoint}${params}`);
  console.log('requisição>>   >>>', data);
  return data;
};

export {
  loginUser,
  createUser,
  getGroup,
};
