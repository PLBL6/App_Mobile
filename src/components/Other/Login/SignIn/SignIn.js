import { Text, View, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class SignIn extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../../../image/loginBackground.jpg')}
                style={styles.background}
            >
                <View style={styles.view1}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../../../../../image/arrowLeft.png')}
                            style={styles.iconArrow}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textBack}>Back</Text>
                </View>
                <View style={styles.view2}>
                    <Image
                        source={require('../../../../../image/shopIcon.png')}
                        style={styles.iconShop}
                    />
                </View>
                <View style={styles.view3}>
                    <View style={styles.Item1}>
                        <Text style={styles.content1}>Hello</Text>
                        <Text style={styles.content2}>Sign into your Account</Text>
                    </View>
                    <View style={styles.Item2}>
                        <Text style={styles.textAll}>Email ID*</Text>
                        <View style={styles.infoLogin}>
                            <TextInput style={styles.textInput} />
                            <Image
                                source={require('../../../../../image/mail.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.Item3}>
                        <Text style={styles.textAll}>Password*</Text>
                        <View style={styles.infoLogin}>
                            <TextInput style={styles.textInput} />
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
                    <TouchableOpacity style={styles.Item5}>
                        <View style={styles.brLogin}>
                            <Text style={styles.login}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.textSignUp}>Register Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}