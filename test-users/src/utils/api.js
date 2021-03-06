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

export const removeUser = async (userId) => {
  const { data } = await axios.delete(`${baseUrl}/${userId}`);
  return data;
}

export const fetchUserbyID = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

export const patchUser = async (userId, body) => {
  const { data } = await axios.patch(`${baseUrl}/${userId}`, body);
  return data;
}