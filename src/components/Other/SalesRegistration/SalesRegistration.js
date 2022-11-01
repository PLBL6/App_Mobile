import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class SalesRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameShop: 'Yody'
        };
    }

    render() {
        const { nameShop } = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../image/arrowLeft.png')}
                    />
                    <Text style={styles.textTitle}>Cài đặt thông tin cửa hàng</Text>
                </TouchableOpacity>
                <View style={styles.info}>
                    <TouchableOpacity style={styles.iteamName}>
                        <View style={styles.viewRow}>
                            <Text style={styles.textAll}>Tên shop *</Text>
                            <Text>{nameShop.length}/30</Text>
                        </View>
                        <TextInput maxLength={30} onChangeText={text => this.setState({ nameShop: text })} style={styles.textAll}>{nameShop}</TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iteamInfo}>
                        <View style={styles.viewRow}>
                            <Text style={styles.textAll}>Địa chỉ lấy hàng *</Text>
                            <View style={styles.viewRow1}>
                                <Text numberOfLines={1} style={styles.textLong}>Điện Thọ, Điện Bàn, Quảng Nam</Text>
                                <Image source={require('../../../../image/arrowRightBlack.png')} style={styles.iconArrowRight} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iteamInfo}>
                        <View style={styles.viewRow}>
                            <Text style={styles.textAll}>Email *</Text>
                            <View style={styles.viewRow1}>
                                <Text style={styles.textAll}>NguyenVanA@gmail.com</Text>
                                <Image source={require('../../../../image/arrowRightBlack.png')} style={styles.iconArrowRight} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iteamInfo}>
                        <View style={styles.viewRow}>
                            <Text style={styles.textAll}>Số điện thoại *</Text>
                            <View style={styles.viewRow1}>
                                <Text style={styles.textAll}>01262029062</Text>
                                <Image source={require('../../../../image/arrowRightBlack.png')} style={styles.iconArrowRight} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewBuy}>
                <TouchableOpacity style={styles.btnDK}>
                        <Text style={styles.textBtn}>Hoàn tất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}