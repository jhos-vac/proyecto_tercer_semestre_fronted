import axios from "axios";

export const users ='http://localhost:8081/skills'
export const fetchSkills = async (url: string) =>{
    const response = await axios.get(url);
    return response.data;
};

export const createSkillsFetch = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateSkillsFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};