import React, { Component } from 'react'
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style';
import { update_SoluongCTmathang } from '../../../../../api/Method/put.js';
import { create_Donhang, create_ChitietDonhang } from '../../../../../api/Method/post.js';

export default class Paypal extends Component {
    async createPurchaseDetail(maCTMH, maDH, soLuong, tongTien, token, TT) {
        await create_ChitietDonhang(maCTMH, maDH, soLuong, tongTien, token, TT)
    }

    async updateSoluong(maCTMH, soLuong, token) {
        await update_SoluongCTmathang(maCTMH, soLuong, token)
    }

    async payment(data, dataTemp) {
        const idDH = await create_Donhang(data.idKH, data.TotalPrice, data.token)
        dataTemp.map((item) => {
            this.createPurchaseDetail(item.idDetail, idDH, item.number, item.number * item.product['gia'], data.token, 'Đã đặt')
            this.updateSoluong(item.idDetail, item.number, data.token)
        });
        alert('Thanh toán thành công !!!')
        AsyncStorage.removeItem('cart');
    }

    render() {
        const url = this.props.route.params.url
        const data = this.props.route.params.data
        const dataTemp = this.props.route.params.dataTemp

        return (
            <WebView
                source={{ uri: url }}
                style={styles.container}
                onNavigationStateChange={(webViewState) => {
                    URL = webViewState.url.split('?')[0]
                    if (URL === "https://api-shop-dut-2.herokuapp.com/api/paypal/success")
                    {
                        this.payment(data, dataTemp)
                        this.props.navigation.goBack()
                    }
                    if (URL === "https://api-shop-dut-2.herokuapp.com/api/paypal/cancel")
                    {
                        this.props.navigation.goBack()
                        alert('Thanh toán thất bại !!!')
                    }
                        
                }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        )
    }
}