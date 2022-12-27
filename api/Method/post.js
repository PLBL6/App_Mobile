import { https, https_2 } from "../Http/http";

export const handle_SignIn_SignUp_KH = async (username, password, option) => {
    const itemUser = []
    const url = []

    //1: SignIn  2:SignUp
    option == 1 ? url.push('check-login-khachhang?matKhau&tenNguoiDung') : url.push('create-khachhang')

    const response = await fetch(https_2 + url[0],
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                tenNguoiDung: username,
                matKhau: password
            }),
        })
    const resJson = await response.json();

    if (option == 1) {
        if (resJson.message === "Missing inputs parameter!") {
            alert("Vui lòng nhập đủ tt !!!!");
        }
        else if (resJson.message === "Ten nguoi dung isnt exist in your system") {
            alert("Tên người dùng không tồn tại !!!!");
        }
        else if (resJson.message === "Wrong password") {
            alert("sai mật khẩu !!!!");
        }
        else {
            alert("Đăng nhập thành công !!!");
            itemUser.push(resJson.user, resJson.token)
        }
    }
    else {
        if (resJson.errMessage === "Ok") {
            alert("Tạo tài khoản thành công !!!!");
        }
        else if (resJson.errMessage === "Ten khach hang da ton tai") {
            alert("Tài khoản đã tồn tại !!!!");
        }
        else {
            alert("Tạo tài khoản thất bại !!!!");
        }
    }

    return itemUser
}

export const create_Donhang = async (khachhang, tongtien, token) => {
    const response = await fetch(https_2 + 'create-new-don-hang',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify({
                khachHang: khachhang,
                tongTien: tongtien
            }),
        })
    const resJson = await response.json();
    return resJson.errMessage['id']
}

export const create_ChitietDonhang = async (maCTMH, maDH, soLuong, tongTien, token, TT) => {
    const response = await fetch(https_2 + 'create-new-chi-tiet-don-hang',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify({
                maCTMH: maCTMH,
                maDH: maDH,
                soLuong: soLuong,
                tongTien: tongTien,
                trangThai: TT
            }),
        })
    const resJson = await response.json();
}

export const create_DanhGia = async (body, token) => {
    const response = await fetch(https_2 + 'create-danh-gia-by-id-mat-hang-khach-hang',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify({
                noiDung: body.noiDung,
                xepHang: body.xepHang,
                matHang: body.matHang,
                khachHang: body.khachHang
            }),
        })
    const resJson = await response.json();
}