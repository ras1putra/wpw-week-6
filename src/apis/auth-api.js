import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}login`, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}users`, userData);
  return response.data;
};


