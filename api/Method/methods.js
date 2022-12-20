import { https, https_2 } from "../Http/http";


//Get
export const getAll = async (url, data) => {
    const response = await fetch( https + url);
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue = async (url, value, data) => {
    const response = await fetch( https + url + value );
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue_2 = async (url, value, data) => {
    const response = await fetch( https_2 + url + value );
    const resJson = await response.json();
    return resJson[data]
}

export const getByToken = async (url, value, data, token) => {
    const response = await fetch(https + url + value,
    {
      method: "GET",
      headers: { 'Authorization': token }
    })
    const resJson = await response.json();
    return resJson[data]
}

export const getByToken_2 = async (url, value, data, token) => {
    const response = await fetch(https_2 + url + value,
    {
      method: "GET",
      headers: { 'Authorization': token }
    })
    const resJson = await response.json();
    return resJson[data]
}