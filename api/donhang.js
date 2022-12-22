import { getByValue_2 } from "./Method/methods";

export const getDonhang_ByIdKH = async (idKH) => {
    return await getByValue_2('get-all-donhangs-by-id-khachhang?khachHangID=', idKH, 'donhangs')
}

export const getChitietDonhang_ByIdDH = async (idDH) => {
    return await getByValue_2('get-all-chi-tiet-donhangs-by-id-donhang?donHangID=', idDH, 'chitietdonhangs')
}