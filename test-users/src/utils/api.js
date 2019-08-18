import axios from 'axios'
const baseUrl = 'https://us-central1-ttest-ba0bc.cloudfunctions.net/app/users'

export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data;
};

export const postUser = async (user) => {
  const { data } = await axios.post(`${baseUrl}`, user);
  return data;
};
