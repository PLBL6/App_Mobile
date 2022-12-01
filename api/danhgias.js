import { getByValue } from "./Method/methods";

export const getSoluongDanhgia = async (id) => {
    return await getByValue('get-all-danhgias-by-id-mathang?matHangId=', id, 'total')
}

export const getDanhgia = async (id) => {
    return await getByValue('get-all-danhgias-by-id-mathang?matHangId=', id, 'danhgias')
}