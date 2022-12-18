import { getByValue_2 } from "./Method/methods";

export const getDanhgia_byID = async (id) => {
    return await getByValue_2('get-all-danhgias-by-id-mathang?matHangId=', id, 'danhgias')
}

export const getTotalDanhGia_byID = async (id) => {
    return await getByValue_2('get-all-danhgias-by-id-mathang?matHangId=', id, 'total')
}