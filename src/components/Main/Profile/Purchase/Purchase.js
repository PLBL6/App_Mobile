import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class Purchase extends Component {
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
                    <FlatList
                        data={Purchase}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.viewBill}>
                                <View style={styles.viewChoose} onPress={() => navigation.navigate('Purchase')}>
                                    <View style={styles.viewTitle}>
                                        <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/shopIcon.png')} />
                                        <Text style={styles.textTitle1}>{item.Shop}</Text>
                                    </View>
                                    <Text style={styles.textClick}>Hoàn thành</Text>
                                </View>
                                <View style={styles.viewProduct}>
                                    <Image source={{ uri: item.image }} style={styles.ImageProduct} />
                                    <View style={styles.viewInfo}>
                                        <Text style={styles.textName} numberOfLines={1}>{item.Name}</Text>
                                        <View style={styles.viewTitle1}>
                                            <Text style={styles.textSize}>{item.Phanloai}</Text>
                                            <Text style={styles.textName}>x{item.number}</Text>
                                        </View>
                                        <Text style={styles.textClick}>${item.price}</Text>
                                    </View>
                                </View>
                                <View style={styles.viewChoose}>
                                    <Text style={styles.textSize}>{item.numberTotal} sản phẩm</Text>
                                    <View style={styles.viewTitle}>
                                        <Text style={styles.textName}>Thành tiền:</Text>
                                        <Text style={styles.textClick}> ${item.number}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        )
    }
}