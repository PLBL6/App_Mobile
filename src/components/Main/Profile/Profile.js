import { Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import ListOption from './ListOption/ListOption';

export default class Profile extends Component {
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

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.checkLogin()
    });
  }

  logOut() {
    AsyncStorage.removeItem('cart');
    AsyncStorage.removeItem('userDetail');
    this.setState({ isLoggedIn: false })
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
        <ListOption navigation={navigation} route={false}/>
      </View>
    );

    const logged = (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../../image/coverImage.jpg')}
          style={styles.cover}
        >
          <View style={styles.contain1}>
            <Image
              style={styles.avatar}
              source={require('../../../../image/catAvatar.jpg')}
            />
            <Text style={styles.name}>Do Phu Vu</Text>
            <TouchableOpacity
              style={styles.btnSignUn}
              onPress={() => this.logOut()}
            >
              <Text style={styles.textBtn2}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ListOption navigation={navigation} route={true}/>
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
