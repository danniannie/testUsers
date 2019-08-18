import axios from 'axios'
const baseUrl = 'https://us-central1-ttest-ba0bc.cloudfunctions.net/app/users'
export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data;
};

//https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/crops"