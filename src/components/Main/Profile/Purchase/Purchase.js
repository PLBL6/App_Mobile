import { Text, View, Image, FlatList, ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import { getDonhang_ByIdKH, getChitietDonhang_ByIdDH } from '../../../../../api/donhang';
import { getChitiet_Idchitietmh } from '../../../../../api/mathangs';
import colors from '../../../../../colors/colors';
import ArrayKichco from '../../../ListImage/ArrayKichco';
import ArrayMausac from '../../../ListImage/ArrayMausac';
import { getNhacungcap_IDmathang } from '../../../../../api/nhacungcap';

export default class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            donHang: [],
            ChitietDH: [],
            isLoading: true,
            mausac: [],
            kichco: [],
        };
    }

    async getChitietDonhang(idDH, total) {
        try {
            const donhang = this.state.ChitietDH
            const detail = await getChitietDonhang_ByIdDH(idDH)
            const mathang = []
            await Promise.all(detail.map(async (item) => {
                const mathangDetail = await getChitiet_Idchitietmh(item.maCTMH)
                let dataMH = {
                    "mathangV2": mathangDetail,
                    "shop": await getNhacungcap_IDmathang(mathangDetail.mathang['id']),
                    "detail": item
                }
                mathang.push(dataMH)
            }))

            let item = {
                "mathang": mathang,
                "total": total
            }
            donhang.push(item)
            this.setState({ ChitietDH: donhang })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    async getDataDonhang(idKH) {
        const donHang = await getDonhang_ByIdKH(idKH)
        this.setState({ donHang: donHang })
        donHang.map((item) => {
            this.getChitietDonhang(item.id, item.tongTien)
        });
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
        this.setState({ mausac: ArrayMausac() });
        this.setState({ kichco: ArrayKichco() });
    }

    render() {
        const { isLoading, ChitietDH, mausac, kichco } = this.state;

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
                    <ImageBackground
                        source={ChitietDH.length === 0 ? require('../../../../../image/Cart/purchaseEmty.png') : require('../../../../../image/Cart/cart.png')}
                        style={styles.info}>
                        {isLoading ?
                            <View style={styles.ViewLoading}>
                                <ActivityIndicator color={colors.mainHome} size={25} />
                                <Text style={styles.textName}>Đang tải dữ liệu</Text>
                            </View> :
                            <FlatList
                                data={ChitietDH}
                                renderItem={({ item, index }) => (
                                    <View key={index} style={styles.viewBill}>
                                        <View style={styles.viewChoose}>
                                            <Text style={styles.textTitle1}>Đơn hàng</Text>
                                        </View>
                                        <FlatList
                                            data={item.mathang}
                                            renderItem={({ item, index }) => (
                                                <View>
                                                    <View style={styles.viewChoose}>
                                                        <View style={styles.viewTitle}>
                                                            <Image style={styles.imageIcon} source={{uri: item.shop['anhDaiDien']}} />
                                                            <Text style={styles.textTitle1}>{item.shop['tenNguoiDung']}</Text>
                                                        </View>
                                                        <Text style={styles.textClick}>{item.detail['trangThai']}</Text>
                                                    </View>
                                                    <View style={styles.viewProduct}>
                                                        <Image source={{ uri: item.mathangV2.mathang['hinhAnh'] }} style={styles.ImageProduct} />
                                                        <View style={styles.viewInfo}>
                                                            <Text style={styles.textName} numberOfLines={1}>{item.mathangV2.mathang['tenMatHang']}</Text>
                                                            <View style={styles.viewTitle1}>
                                                                <Text style={styles.textSize}>{mausac[item.mathangV2.ctmh['maMS'] - 1]} - Size: {kichco[item.mathangV2.ctmh['maKC'] - 1]}</Text>
                                                                <Text style={styles.textName}>x{item.detail['soLuong']}</Text>
                                                            </View>
                                                            <Text style={styles.textClick}>{item.mathangV2.mathang['gia']} $</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )}
                                        />
                                        <View style={styles.viewChoose}>
                                            <Text style={styles.textSize}>{item.mathang.length} sản phẩm</Text>
                                            <View style={styles.viewTitle}>
                                                <Text style={styles.textName}>Thành tiền:</Text>
                                                <Text style={styles.textClick}>{item.total} đ</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        }
                    </ImageBackground>
                </View>
            </View>
        )
    }
}