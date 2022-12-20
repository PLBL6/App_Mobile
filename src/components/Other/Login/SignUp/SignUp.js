import { Text, View, Image, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class SignUp extends Component {
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
                                <TextInput style={styles.textInput} />
                                <Image
                                    source={require('../../../../../image/username.png')}
                                    style={styles.iconUsername}
                                />
                            </View>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>Password*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput secureTextEntry={true} style={styles.textInput} />
                                <Image
                                    source={require('../../../../../image/mail.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.Item2}>
                            <Text style={styles.textAll}>Confirm Your Password*</Text>
                            <View style={styles.infoLogin}>
                                <TextInput secureTextEntry={true} style={styles.textInput} />
                                <Image
                                    source={require('../../../../../image/hide.png')}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.Item4}>
                            <View style={styles.brLogin}>
                                <Text style={styles.login}>Register Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view4}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.textSignUp}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}