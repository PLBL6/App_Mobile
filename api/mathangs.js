import { getAll, getByValue, getByValue_NotData } from "./Method/methods";

export const getMathang = async () => {
    return await getAll('get-mathangs?idMatHang=ALL', 'mathangs')
}

export const getMathang_Danhmuc = async (idDanhMuc) => {
    return await getByValue('get-all-mathangs-by-id-danhmuc?danhMucID=', idDanhMuc, 'mathangs')
}

export const getMathang_Tenmathang = async (name) => {
    return await getByValue('get-mathangs-by-search?search=', name, 'mathangs')
}

export const getMathang_IDmathang = async (id) => {
    return await getByValue('get-mathangs?idMatHang=', id, 'mathangs')
}

export const getAnhMathang_IDmathang = async (id) => {
    return await getByValue('get-all-hinh-anh-mathangs-by-id-mathang?matHangID=', id, 'hinhanhs')
}

export const getRatingMathang_IDmathang = async (id) => {
    return await getByValue('get-avg-rating-by-id-mathang?idMatHang=', id, 'avgrating')
}

export const getChitiet_IDmathang = async (id) => {
    return await getByValue('get-all-chi-tiet-mathangs-by-id-mathang?matHangID=', id, 'chitietmathangs')
} 

export const getChitiet_Idchitietmh = async (id) => {
    return await getByValue_NotData('get-detail-chitietmathang?ctmhId=', id)
} 

export const getDaban_Idmathang = async (id) => {
    return await getByValue('get-soluong-daban-by-id-mathang?matHangId=', id, 'soluong')
} 

export const getTop10Daban_Idmathang = async (id) => {
    return await getByValue('get-top10-mathang-by_id_ncc?nhaCungCapId=', id, 'mathangs')
} 

export const getMathangDamua_IdKH = async (id) => {
    return await getByValue('get-all-mathangs-by-id-khachhang?khachHangId=', id, 'mathangs')
} 