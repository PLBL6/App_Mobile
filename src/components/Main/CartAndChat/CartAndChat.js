import { TouchableOpacity, View, Image, ToastAndroid } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'

export default class CartAndChat extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    checkLogin() {
        AsyncStorage.getItem('userDetail').then((userData) => {
            if (userData !== null)
                this.setState({ isLoggedIn: true })
            else
                this.setState({ isLoggedIn: false })
        })
            .catch((err) => {
                alert(err)
            })
    }

    alert() {
        ToastAndroid.showWithGravity(
            "Chức năng này vẫn đang được phát triển !!!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.checkLogin()
        });

    }

    render() {
        const navigation = this.props.navigation
        const { isLoggedIn } = this.state

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => isLoggedIn ? navigation.navigate('Cart') : navigation.navigate('SignIn', {newUser: null})}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../image/cart.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.alert()}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../image/chat.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
