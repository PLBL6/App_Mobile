import { getByValue_2, getByToken_2param } from "./Method/methods";

export const getDonhang_ByIdKH = async (idKH) => {
    return await getByValue_2('get-all-donhangs-by-id-khachhang?khachHangID=', idKH, 'donhangs')
}

export const getChitietDonhang_ByIdDH = async (idDH) => {
    return await getByValue_2('get-all-chi-tiet-donhangs-by-id-donhang?donHangID=', idDH, 'chitietdonhangs')
}

export const getPayment_ByidKHvsTongTien = async(idKH, totalPrice, token) => {
    const url = 'paypal?KhachHangId=' + idKH + '&tongTien=' + totalPrice
    const urlReuqest = await getByToken_2param(url, token, 'url')
    return urlReuqest.url
}