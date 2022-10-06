import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import CardAndChat from "../CartAndChat/CartAndChat.js"

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    const navigation = this.props.navigation

    const notLogged = (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../../image/coverImage.jpg')}
          style={styles.cover}>
          <View style={styles.notLogin}>
            <Image
              style={styles.avatar}
              source={require('../../../../image/notLoginAvatar.png')}
            />
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btnSignIn}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.textBtn1}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnSignUn}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.textBtn2}>Đăng kí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );

    const logged = (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../../image/coverImage.jpg')}
          style={styles.cover}
        >
          <View style={styles.contain}>
            <TouchableOpacity>
              <View style={styles.tag}>
                <Text style={styles.text}>Shop của tôi </Text>
                <Image
                  style={styles.arrow}
                  source={require('../../../../image/arrowRight.png')}
                />
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../../../../image/setting.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <CardAndChat />
            </View>
          </View>
          <View style={styles.contain1}>
            <Image
              style={styles.avatar}
              source={require('../../../../image/catAvatar.jpg')}
            />
            <Text style={styles.name}>Do Phu Vu</Text>
          </View>
        </ImageBackground>
        <View style={styles.contain2}>
          <Text>Emty Emty Emty Emty Emty</Text>
        </View>
      </View>
    );

    const Main = this.state.isLoggedIn ? logged : notLogged

    return (
      <View>
        {Main}
      </View>
    )
  }
}
