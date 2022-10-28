import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './Style.js'

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <ScrollView>
            <View style={styles.view2}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://product.hstatic.net/200000343865/product/18_37_a48342740086452297644c49f6aa3bb6.jpg' }}
              />
              <View style={styles.viewInfo}>
                <Text numberOfLines={1} style={styles.textName}>Truyện tranh shin cậu bé bút chì - đặt biệt - Lẻ -8-12 _NXB Kim Đồng</Text>
                <View style={styles.viewCategory}>
                  <Text>Phân loại: Tập 8 </Text>
                </View>
                <Text style={styles.textPrice}>đ19.000</Text>
                <View style={styles.viewOption}>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.viewNumber}>
                    <Text style={styles.textName}>0</Text>
                  </View>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.view2}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://bookbuy.vn/Res/Images/Product/shin-cau-be-but-chi-phien-ban-hoat-hinh-mau-cu-shin-cham-bo-om-tap-30-tai-ban-2019-_96488_1.jpg' }}
              />
              <View style={styles.viewInfo}>
                <Text numberOfLines={1} style={styles.textName}>Truyện tranh shin cậu bé bút chì - đặt biệt - Lẻ -8-12 _NXB Kim Đồng</Text>
                <View style={styles.viewCategory}>
                  <Text>Phân loại: Tập 30 </Text>
                </View>
                <Text style={styles.textPrice}>đ19.000</Text>
                <View style={styles.viewOption}>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.viewNumber}>
                    <Text style={styles.textName}>5</Text>
                  </View>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.view2}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img425_11.jpg' }}
              />
              <View style={styles.viewInfo}>
                <Text numberOfLines={1} style={styles.textName}>Truyện tranh shin cậu bé bút chì - đặt biệt - Lẻ -8-12 _NXB Kim Đồng</Text>
                <View style={styles.viewCategory}>
                  <Text>Phân loại: Tập 10 </Text>
                </View>
                <Text style={styles.textPrice}>đ20.000</Text>
                <View style={styles.viewOption}>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.viewNumber}>
                    <Text style={styles.textName}>1</Text>
                  </View>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.view2}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img425_11.jpg' }}
              />
              <View style={styles.viewInfo}>
                <Text numberOfLines={1} style={styles.textName}>Truyện tranh shin cậu bé bút chì - đặt biệt - Lẻ -8-12 _NXB Kim Đồng</Text>
                <View style={styles.viewCategory}>
                  <Text>Phân loại: Tập 10 </Text>
                </View>
                <Text style={styles.textPrice}>đ20.000</Text>
                <View style={styles.viewOption}>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.viewNumber}>
                    <Text style={styles.textName}>1</Text>
                  </View>
                  <TouchableOpacity style={styles.viewMath}>
                    <Text style={styles.textName}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.viewBuy}>
          <TouchableOpacity style={styles.viewBuyInfo}>
            <View>
              <Text style={styles.textName}>Tổng thanh toán:</Text>
              <Text style={styles.textName}>Tiết kiệm:</Text>
            </View>
            <View>
              <Text style={styles.textPrice2}>đ50.000</Text>
              <Text style={styles.textPrice2}>đ5.000</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBuy}>
            <Text style={styles.textBtnBuy}>Mua hàng (4)</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
