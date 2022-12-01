import { getAll, getByValue } from "./Method/methods";

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

//chua fix
export const getIDChitietMSvKC_IDmathang = async (id) => {
    const chitietID = await getByValue('get-all-chi-tiet-mathangs-by-id-mathang?matHangID=', id, 'chitietmathangs')
    const chitiet = []
    chitietID.map(async (item) => (
        chitiet.push(item.maMS, item.maKC, item.soLuong)
    ))
    return chitiet
} 

export const getMausac_IDmathang = async (id) => {
    const mausac = await getByValue('get-mausac-by-id?mauSacId=', id, 'mausac')
    return mausac[0]["tenMauSac"]
}

export const getKichco_IDmathang = async (id) => {
    const kichco = await getByValue('get-kichco-by-id?kichCoId=', id, 'mausac')
    return kichco[0]["kichCo"]
} 

export const getKichcovMausac_IDmathang = async (id) => {
    const chitietID = await getIDChitietMSvKC_IDmathang(id)
    const chitiet = []

    for (var i = 0; i < chitietID.length; i = i+3){
        chitiet.push(await getMausac_IDmathang(chitietID[i]), await getKichco_IDmathang(chitietID[i+1]), chitietID[i+2])
    }

    return chitiet
} 