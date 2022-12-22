import { Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import { getDonhang_ByIdKH, getChitietDonhang_ByIdDH } from '../../../../../api/donhang';
import colors from '../../../../../colors/colors';

export default class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            donHang: [],
            ChitietDH: [],
            isLoading: true,
        };
    }

    async getChitietDonhang(idDH, total) {
        try {
            const donhang = this.state.ChitietDH
            donhang.push(await getChitietDonhang_ByIdDH(idDH), total)
            this.setState({ ChitietDH: donhang })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    async getDataDonhang(idKH) {
        this.setState({ donHang: await getDonhang_ByIdKH(idKH) })
        const donHang = this.state.donHang
        donHang.map((item) => {
            this.getChitietDonhang(item.id, item.tongTien)
        });
        this.getChitietDonhang(donHang.id)
    }

    getDonhang() {
        try {
            AsyncStorage.getItem('userDetail').then((userData) => {
                const user = JSON.parse(userData)
                this.getDataDonhang(user[0].user['id'])
            })
        } catch (error) {
            console.log(error);
        }
    }


    componentDidMount() {
        this.getDonhang();
    }

    render() {
        const Purchase = [
            {
                "Shop": "youxiu.vn",
                "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "Name": "Kìm tập tay",
                "Phanloai": "Đen",
                "number": 2,
                "price": 50,
                "numberTotal": 4,
                "priceTotal": 100
            },
            {
                "Shop": "youxiu.vn",
                "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "Name": "Kìm tập tay",
                "Phanloai": "Đen",
                "number": 2,
                "price": 50,
                "numberTotal": 4,
                "priceTotal": 100
            },
            {
                "Shop": "youxiu.vn",
                "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "Name": "Kìm tập tay",
                "Phanloai": "Đen",
                "number": 2,
                "price": 50,
                "numberTotal": 4,
                "priceTotal": 100
            },
            {
                "Shop": "youxiu.vn",
                "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "Name": "Kìm tập taydasdasddasdsdsdasdas",
                "Phanloai": "Đen",
                "number": 2,
                "price": 50,
                "numberTotal": 4,
                "priceTotal": 100
            },
        ]

        const { isLoading, ChitietDH } = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../../image/arrowLeft.png')}
                    />
                    <Text style={styles.textTitle}>Đơn mua</Text>
                </TouchableOpacity>
                <View style={styles.info}>
                    {isLoading ?
                        <View style={styles.ViewLoading}>
                            <ActivityIndicator color={colors.white} size={25} />
                            <Text style={styles.textName}>Đang tải dữ liệu</Text>
                        </View> : (
                            ChitietDH.map((item, index) => {
                                <TouchableOpacity key={index} style={styles.viewBill}>
                                    <View style={styles.viewChoose} onPress={() => navigation.navigate('Purchase')}>
                                        <View style={styles.viewTitle}>
                                            <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/shopIcon.png')} />
                                            <Text style={styles.textTitle1}>ok</Text>
                                        </View>
                                        <Text style={styles.textClick}>Hoàn thành</Text>
                                    </View>
                                    <View style={styles.viewProduct}>
                                        <Image source={{ uri: "https://i.dummyjson.com/data/products/1/thumbnail.jpg" }} style={styles.ImageProduct} />
                                        <View style={styles.viewInfo}>
                                            <Text style={styles.textName} numberOfLines={1}>ok</Text>
                                            <View style={styles.viewTitle1}>
                                                <Text style={styles.textSize}>{item.maCTMH}</Text>
                                                <Text style={styles.textName}>x{item.soLuong}</Text>
                                            </View>
                                            <Text style={styles.textClick}>{item.tongTien} đ</Text>
                                        </View>
                                    </View>
                                    <View style={styles.viewChoose}>
                                        <Text style={styles.textSize}>{item.length} sản phẩm</Text>
                                        <View style={styles.viewTitle}>
                                            <Text style={styles.textName}>Thành tiền:</Text>
                                            <Text style={styles.textClick}>{item} đ</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            })
                        )}
                </View>
            </View>
        )
    }
}