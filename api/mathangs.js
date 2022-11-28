import { get } from "./Method/methods";

export const getMathang = async () => {
    return await get('get-mathangs?idMatHang=ALL', '','mathangs')
}

export const getMathang_Danhmuc = async (idDanhMuc) => {
    return await get('get-all-mathangs-by-id-danhmuc?danhMucID=', idDanhMuc,'mathangs')
}

export const getMathang_Tenmathang = async (name) => {
    return await get('get-mathangs-by-search?search=', name,'mathangs')
}