import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataTemp: [],
            isLoading: true,
            text: '',
            arrayholder: []
        };
    }

    async getProducts() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const json = await response.json();
            this.setState({ data: json.products });
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
        const { data, isLoading} = this.state;
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
                                    onPress={() => navigation.navigate('InfoProduct', { data: data, id: item.id })}
                                >
                                    <Image source={{ uri: item.thumbnail }} style={styles.Image} />
                                    <View style={styles.discout}>
                                        <Text style={styles.textDiscount}>41%</Text>
                                        <Text style={styles.textGIAM}>GIẢM</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text numberOfLines={1} style={styles.textName}>{item.title}</Text>
                                        <View style={styles.info1}>
                                            <Text style={styles.textPrice}>${item.price}</Text>
                                            <Text style={styles.textAvailable}>Đã bán {item.stock}</Text>
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