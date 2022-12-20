import { Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class ListOption extends Component {
  render() {
    const navigation = this.props.navigation
    const route = this.props.route
    const dataUser = this.props.data

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

    return (
      <View>
        <View style={styles.viewOption}>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('Purchase') : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/purchase.png')} />
              <Text style={styles.textTitle}>Đơn Mua</Text>
            </View>
            <Text style={styles.textClick}>Xem lịch sử mua hàng  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('MyComment') : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/evaluate.png')} />
              <Text style={styles.textTitle}>Đánh giá của tôi</Text>
            </View>
            <Text style={styles.textClick}>➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('SettingInfo', {data: dataUser}) : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/profile.png')} />
              <Text style={styles.textTitle}>Thiết lập thông tin</Text>
            </View>
            <Text style={styles.textClick}> ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('Repurchase') : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/bagShopping.png')} />
              <Text style={styles.textTitle}>Mua lại</Text>
            </View>
            <Text style={styles.textClick}>Xem thêm sản phẩm ➤</Text>
          </TouchableOpacity>
          {
            route ? (
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
                      <Image style={styles.imageCart} source={require('../../../../../image/IconFrofile/cart.png')} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : 
            null
          }
        </View>
      </View>
    )
  }
}