import axios from "axios";
export const users ='http://localhost:8081/users'

export const fetchUsers = async (url: string) =>{
    const response = await axios.get(url);
    return response.data;
};

export const createUsersFetch = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateUsersFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};