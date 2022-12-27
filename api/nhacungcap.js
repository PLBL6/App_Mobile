import { getByValue } from "./Method/methods";

export const getNhacungcap_IDmathang = async (idMatHang) => {
    const array = await getByValue('get-nhacungcap-by-id-mathang?idMatHang=', idMatHang, 'nhacungcap')
    return array["NhaCungMatHangCapData"]
}

export const getMathang_IDnhacungcap = async (idNhacungcap) => {
    const mathangs = await getByValue('get-all-mathangs-by-id-nhacungcap?nhaCungCapId=', idNhacungcap, 'mathangs')
    return mathangs
}

export const getDanhmuc_IDnhacungcap = async (idNhacungcap) => {
    const danhmucs = await getByValue('get-danhmucs-by-id-nhacungcap?nhaCungCapId=', idNhacungcap, 'mathangs')
    return danhmucs
}

export const getSanpham_IDDanhmucvsNhacungcap = async (idNhacungcap, idDanhmuc) => {
    const url2Param = idNhacungcap + '&danhMucId=' + idDanhmuc
    const sanphams = await getByValue('get-all-mathangs-by-id-nhacungcap-and-id-danhmuc?nhaCungCapId=', url2Param, 'mathangs')
    return sanphams
}

export const getRatingAVG_IDnhacungcap = async (idNhacungcap) => {
    const array = await getByValue('get-avg-rating-nhacungcap?nhaCungCapId=', idNhacungcap, 'avgNCC')
    return array
}