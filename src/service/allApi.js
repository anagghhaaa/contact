import axios from "axios";

const base_url="https://contact-server-si1o.onrender.com"


export const addContact=async(data)=>{
    return await axios.post(`${base_url}/contact`,data)
}
export const getContact=async()=>{
    return await axios.get(`${base_url}/contact`)
}
export const deleteContact=async(id)=>{
    return await axios.delete(`${base_url}/contact/${id}`)
}
export const checkEmailApi=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}
export const registerApi=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}
export const loginApi=async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}
export const updateContact = async (id, updatedContact) => {
    return await axios.put(`${base_url}/contact/${id}`, updatedContact);
}   
