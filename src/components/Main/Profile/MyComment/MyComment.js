import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class MyComment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../../image/arrowLeft.png')}
                    />
                    <Text style={styles.textTitle}>Đánh giá của tôi</Text>
                </TouchableOpacity>
                
                <View style={styles.info}>
                </View>
            </View>
        )
    }
}