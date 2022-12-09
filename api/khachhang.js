import { getByValue } from "./Method/methods";

export const getKhachhang_IDkhachhang = async (idKhachhang) => {
    const array = await getByValue('get-khachhang-by-id?khachHangId=', idKhachhang, 'khachhang')
    return array
}