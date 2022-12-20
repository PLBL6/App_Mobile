import { getByToken_2 } from "./Method/methods";

export const getKhachhang_byID = async (idKhachhang, token) => {
    const array = await getByToken_2('get-khachhang-by-id?khachHangId=', idKhachhang, 'khachhang', token)
    return array
}