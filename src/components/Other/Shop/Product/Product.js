import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { getMathang_IDnhacungcap } from '../../../../../api/nhacungcap';

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getProducts() {
        try {
            this.setState({ data: await getMathang_IDnhacungcap(this.props.route.params.idNhacungcap) });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        const { data, isLoading } = this.state;
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <View style={styles.containerv2}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => navigation.navigate('InfoProductShop', { id: item.id})}
                                >
                                    <Image source={{ uri: item.hinhAnh }} style={styles.Image} />
                                    <View style={styles.discout}>
                                        <Text style={styles.textDiscount}>{item.khuyenMai}%</Text>
                                        <Text style={styles.textGIAM}>GIẢM</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text numberOfLines={1} style={styles.textName}>{item.tenMatHang}</Text>
                                        <View style={styles.info1}>
                                            <Text style={styles.textPrice}>{item.gia}đ</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            </View>
        )
    }
}