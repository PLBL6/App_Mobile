import { getAll } from "./Method/methods";

export const getDanhmuc = async () => {
    return await getAll('get-danhmucs','danhmucs')
}