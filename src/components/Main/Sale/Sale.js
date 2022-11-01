import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class Sale extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={styles.textTitle}>Chào mừng đến Shoppe!</Text>
                </View>
                <View style={styles.view2}>
                    <Image style={styles.iconBackground} source={require('../../../../image/backgroundSale.jpg')} />
                    <Text style={styles.textInfo}>Để đăng kí bán hàng trên Shoppe, bạn cần cung cấp một số thông tin cơ bản</Text>
                </View>
                <View style={styles.view3}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SalesRegistration')} style={styles.btnDK}>
                        <Text style={styles.textBtn}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}