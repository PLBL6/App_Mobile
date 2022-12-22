import { https, https_2 } from "../Http/http";

export const update_Khachhang = async (body, idKH, token) => {
    const response = await fetch(https_2 + 'update-khachhang-by-id',
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify({
                id: idKH,
                ho: body.ho,
                ten: body.ten,
                gioiTinh: body.gioiTinh,
                ngaySinh: body.ngaySinh,
                diaChi: body.diaChi,
                sdt: body.sdt,
                email: body.email,
                anhDaiDien: body.anhDaiDien
            }),
        })
    const resJson = await response.json();

    if (resJson.errMessage['message'] === "Update the user succeeds!")
        alert('Cập nhật thành công !!!')   
    else 
        alert('Cập nhật thất bại !!!')   
}