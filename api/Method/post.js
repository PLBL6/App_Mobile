import { https, https_2 } from "../Http/http";
import { useState } from 'react';

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

    if(option == 1) {
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