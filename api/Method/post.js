import { https, https_2 } from "../Http/http";

export const checkLogin_KH = async (username, password) => {
    const itemUser = []

    const response = await fetch(https_2 + 'check-login-khachhang?matKhau&tenNguoiDung',
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            tenNguoiDung: username,
            matKhau: password
        }),
    })
    const resJson = await response.json();
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
    return itemUser
}