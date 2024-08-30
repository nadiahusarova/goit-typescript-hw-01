import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


interface User {
  name: string;
  age: number;
  email: string;
}

const fetchUserData = async () => {
  try {
    const user = await fetchData<User>('https://api.example.com/user');
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
