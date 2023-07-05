import axios from "axios";

export const apply ='http://localhost:8081/apply'
export const fetchApply = async (url: string) =>{
    const response = await axios.get(url);
    return response.data;
};

export const createApplytFetch = async (url: string, { arg }: any) => {
    const response = await axios.post(url, arg);
    return response.data;
};

export const updateApplyFetch = async (url: string, { arg }: any) => {
    const response = await axios.patch(url, arg);
    return response.data;
};