import { Text, View, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { handle_SignIn_SignUp_KH } from '../../../../../api/Method/post'

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: ''
        };
    }

    setUsername(text) {
        this.setState({ username: text })
    }

    setPassword(text) {
        this.setState({ password: text })
    }

    setRePassword(text) {
        this.setState({ rePassword: text })
    }

    async register(navigation) {
        try {
            if(this.state.password === this.state.rePassword) {
                await handle_SignIn_SignUp_KH(this.state.username, this.state.password, 2)
                const newUser = {
                    username: this.state.username,
                    password: this.state.password
                }
                navigation.navigate('SignIn', {newUser: newUser})
            }
            else
                alert('Nhập lại mật khẩu không đúng')
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
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
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
                            <Text style={styles.content}>Sign into your Account</Text>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>User Name*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput style={styles.textInput} onChangeText={text => this.setUsername(text)}/>
                                <Image
                                    source={require('../../../../../image/username.png')}
                                    style={styles.iconUsername}
                                />
                            </View>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>Password*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={text => this.setPassword(text)}/>
                                <Image
                                    source={require('../../../../../image/hide.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>Confirm Your Password*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={text => this.setRePassword(text)}/>
                                <Image
                                    source={require('../../../../../image/hide.png')}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.Item4} onPress={() => this.register(navigation)}>
                            <View style={styles.brLogin}>
                                <Text style={styles.login}>Register Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view4}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn', {newUser: null})}>
                            <Text style={styles.textSignUp}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}