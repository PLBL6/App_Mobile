import { Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style.js'

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCart: []
    };
  }

  setSoLuong(i, action) {
    const dataTemp = this.state.dataCart
    let number = dataTemp[i].number;
    let totalPrice = dataTemp[i].totalPrice
    let price = dataTemp[i].product["gia"]

    if (action) {
      number = number + 1
      dataTemp[i].number = number
      dataTemp[i].totalPrice = totalPrice + price
      this.setState({ dataCart: dataTemp })
    }
    else if (action == false && number >= 2) {
      number = number - 1
      dataTemp[i].number = number
      dataTemp[i].totalPrice = totalPrice - price
      this.setState({ dataCart: dataTemp })
    }
    else if (action == false && number == 1) {
      dataTemp.splice(i, 1)
      this.setState({ dataCart: dataTemp })
    }

    AsyncStorage.removeItem('cart');
    AsyncStorage.setItem('cart', JSON.stringify(dataTemp));
  }

  componentDidMount() {
    AsyncStorage.getItem('cart').then((cart) => {
      if (cart !== null) {
        const cartData = JSON.parse(cart)
        this.setState({ dataCart: cartData })
      }
    })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    const { dataCart } = this.state;

    var TotalPriceAll = 0
    for (var i = 0; i < dataCart.length; i++) {
      TotalPriceAll = TotalPriceAll + dataCart[i].totalPrice
    }

    var savePrice = 0
    for (var i = 0; i < dataCart.length; i++) {
      savePrice = savePrice + dataCart[i].number * (dataCart[i].cost - dataCart[i].product["gia"]) 
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <ImageBackground
          source={ dataCart.length === 0 ? require('../../../../image/Cart/cartEmty.png') : require('../../../../image/Cart/cart.png')}
          style={styles.info}>
          <FlatList
            data={dataCart}
            renderItem={({ item, index }) => (
              <View key={item.id}>
                <View style={styles.view2}>
                  <Image
                    style={styles.avatar}
                    source={{ uri: item.product["hinhAnh"] }}
                  />
                  <View style={styles.viewInfo}>
                    <Text numberOfLines={1} style={styles.textName}>{item.product["tenMatHang"]}</Text>
                    <View style={styles.viewCategory}>
                      <Text>{item.detail} </Text>
                    </View>
                    <View style={styles.viewPrice}>
                      <Text style={styles.textPriceDiscount}>đ{item.cost}</Text>
                      <Text style={styles.textPrice}>đ{item.product["gia"]}</Text>
                    </View>
                    <View style={styles.viewOption}>
                      <TouchableOpacity style={styles.viewMath} onPress={() => this.setSoLuong(index, false)}>
                        <Text style={styles.textName}>-</Text>
                      </TouchableOpacity>
                      <View style={styles.viewNumber}>
                        <Text style={styles.textName}>{item.number}</Text>
                      </View>
                      <TouchableOpacity style={styles.viewMath} onPress={() => this.setSoLuong(index, true)}>
                        <Text style={styles.textName}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.viewTotalOne}>
                  <Text style={styles.textName2}>Tổng tiền:</Text>
                  <Text style={styles.textPrice}>đ{item.totalPrice}</Text>
                </View>
              </View>
            )}
          />
        </ImageBackground>
        <View style={styles.viewBuy}>
          <View style={styles.viewBuyInfo}>
            <View style={styles.viewTitle}>
              <Text style={styles.textTotalLast}>Tổng thanh toán:</Text>
              <Text style={styles.textTotalLast}>Tiết kiệm:</Text>
            </View>
            <View>
              <Text style={styles.textPrice2}>đ{TotalPriceAll}</Text>
              <Text style={styles.textsavePrice}>đ{savePrice}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnBuy}>
            <Text style={styles.textBtnBuy}>Mua hàng ({dataCart.length})</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
