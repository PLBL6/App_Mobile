import { get } from "./Method/methods";

export const getDanhmuc = async () => {
    return await get('get-danhmucs', '','danhmucs')
}