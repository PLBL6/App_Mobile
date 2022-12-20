import { Text, View, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import { checkLogin_KH } from '../../../../../api/Method/post';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    setUsername(text) {
        this.setState({ username: text })
    }

    setPassword(text) {
        this.setState({ password: text })
    }

    async checkLoginKhachHang(navigation) {
        try {
            const itemUser = await checkLogin_KH(this.state.username, this.state.password)
            if (itemUser.length !== 0) {
                const user = {
                    user: itemUser[0],
                    token: itemUser[1]
                }
                const userDetail = []
                userDetail.push(user)
                AsyncStorage.setItem('userDetail', JSON.stringify(userDetail))
                navigation.navigate('TabBar')
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const navigation = this.props.navigation

        return (
            <ImageBackground
                source={require('../../../../../image/loginBackground.jpg')}
                style={styles.background}
            >
                <ScrollView>
                    <View style={styles.view1}>
                        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../../../../image/arrowLeft.png')}
                                style={styles.iconArrow}
                            />
                            <Text style={styles.textBack}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>
                        <Image
                            source={require('../../../../../image/shopIcon.png')}
                            style={styles.iconShop}
                        />
                    </View>
                    <View style={styles.view3}>
                        <View style={styles.Item1}>
                            <Text style={styles.content2}>Sign into your Account</Text>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>User Name*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput style={styles.textInput} onChangeText={text => this.setUsername(text)} />
                                <Image
                                    source={require('../../../../../image/mail.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.Item3}>
                            <Text style={styles.textAll}>Password*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={text => this.setPassword(text)} />
                                <Image
                                    source={require('../../../../../image/hide.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.Item4}>
                            <TouchableOpacity>
                                <Text style={styles.textAll}>Forgot your Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.Item5} onPress={() => this.checkLoginKhachHang(navigation)}>
                            <View style={styles.brLogin}>
                                <Text style={styles.login}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view4}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.textSignUp}>Register Now</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}