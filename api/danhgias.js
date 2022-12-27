import { getByValue_2 } from "./Method/methods";

export const getDanhgia_byID = async (id) => {
    return await getByValue_2('get-all-danhgias-by-id-mathang?matHangId=', id, 'danhgias')
}

export const getAnhDanhgia_byIDDanhgia = async (id) => {
    return await getByValue_2('get-all-hinhanh-danhgias-by-id-danhgia?danhgiaId=', id, 'hinhanhdanhgias')
}

export const getTotalDanhGia_byID = async (id) => {
    return await getByValue_2('get-all-danhgias-by-id-mathang?matHangId=', id, 'total')
}