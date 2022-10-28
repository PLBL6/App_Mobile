import { TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class CartAndChat extends Component {
    render() {
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../image/cart.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../../../../image/chat.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
