import axios from "axios";
export const project ='http://localhost:8081/project'

export const fetchProject = async (url: string) =>{
    const response = await axios.get(url);
    return response.data;
};

export const createProjectFetch = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateProjectFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};