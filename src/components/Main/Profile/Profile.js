import { Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
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
    const Product = [
      {
        "image": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "price": 549
      },
      {
        "image": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "price": 899
      },
      {
        "image": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "price": 355
      },
      {
        "image": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "price": 268
      },
      {
        "image": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "price": 100
      }
    ]

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
        <View style={styles.viewOption}>
          <TouchableOpacity style={styles.viewChoose} onPress={() => navigation.navigate('Purchase')}> 
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../image/IconFrofile/purchase.png')} />
              <Text style={styles.textTitle}>Đơn Mua</Text>
            </View>
            <Text style={styles.textClick}>Xem lịch sử mua hàng  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => navigation.navigate('MyComment')}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../image/IconFrofile/evaluate.png')} />
              <Text style={styles.textTitle}>Đánh giá của tôi</Text>
            </View>
            <Text style={styles.textClick}>➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => navigation.navigate('SettingInfo')}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../image/IconFrofile/profile.png')} />
              <Text style={styles.textTitle}>Thiết lập thông tin</Text>
            </View>
            <Text style={styles.textClick}> ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => navigation.navigate('Repurchase')}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../image/IconFrofile/bagShopping.png')} />
              <Text style={styles.textTitle}>Mua lại</Text>
            </View>
            <Text style={styles.textClick}>Xem thêm sản phẩm ➤</Text>
          </TouchableOpacity>
          <FlatList
            data={Product}
            keyExtractor={(item, index) => {
              return index.toString();
          }}
            horizontal={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity key={index} style={styles.viewProduct}>
                <Image source={{ uri: item.image }} style={styles.ImageProduct} />
                <Text style={styles.textBuyBack}>Đã mua 1 lần</Text>
                <View style={styles.viewPrice}>
                  <Text style={styles.textBtn1}>đ{item.price}</Text>
                  <Image style={styles.imageCart} source={require('../../../../image/IconFrofile/cart.png')} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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
