import { https } from "../Http/http";

export const get = async (url, value, data) => {
    const response = await fetch( https + url + value );
    const resJson = await response.json();
    return resJson[data]
}