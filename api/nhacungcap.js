import { getByValue } from "./Method/methods";

export const getNhacungcap_IDmathang = async (idMatHang) => {
    const array = await getByValue('get-nhacungcap-by-id-mathang?idMatHang=', idMatHang, 'nhacungcap')
    return array["NhaCungMatHangCapData"]
}