import axios from "axios";
export const project ='http://localhost:8081/project'
export const Skill ='http://localhost:8081/skills'
export const users ='http://localhost:8081/users'
export const  ViewProject= "http://localhost:8081/projectSkills"

export const fetchData = async (url: string) =>{
    const response = await axios.get(url);
    return response.data;
};


export const createDataFetch = async (url: string, data: any) => {
    const response = await axios.post(url, data);
    return response.data;
};


export const updateDataFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};