import { Text, TouchableOpacity, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import Rating from '../Rating/Rating';

export default class InfoProduct extends Component {
  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  Messge() {
    ToastAndroid.show(
      'Đã thêm vào giỏ',
      ToastAndroid.SHORT
    )
  }

  render() {
    const data = this.props.route.params.data.filter(data => data.id == this.props.route.params.id)

    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <ScrollView>
            {
              data.map((item, index) => (
                <View style={styles.viewImage} key={index}>
                  <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.change}
                    style={styles.scrollView}
                  >
                    {
                      item.images.map((image, index) => (
                        <Image
                          key={index}
                          source={{ uri: image }}
                          style={styles.image}
                        />
                      ))
                    }
                  </ScrollView>

                  <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                    <Image
                      source={require('../../../../image/arrowLeftv2.png')}
                      style={styles.iconArrow}
                    />
                  </TouchableOpacity>

                  <View style={styles.dotView}>
                    {
                      item.images.map((i, k) => (
                        <Text key={k} style={k == this.state.active ? styles.dotActive : styles.dotNotActive}>●</Text>
                      ))
                    }
                  </View>
                </View>
              ))
            }
            {
              data.map((item, index) => (
                <View style={styles.info} key={index}>
                  <View style={styles.info2}>
                    <Text style={styles.textName}>{item.title}</Text>
                  </View>
                  <View style={styles.info1}>
                    <View style={styles.viewInfo1}>
                      <Text style={styles.textPrice}>${item.price}.00</Text>
                      <Text style={styles.textSale}>Đã bán: {item.stock} | 16% GIẢM</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Comment', { thumbnail: item.thumbnail })} style={styles.viewInfo2}>
                      <View style={styles.info3}>
                        <Text style={styles.textRating}>{item.rating}</Text>
                        <Rating rating={item.rating} />
                        <Image
                        style={styles.iconArrowRating}
                        source={require('../../../../image/arrowRight.png')}
                        />
                      </View>
                      <Text style={styles.textSale}>Dựa trên 27 đánh giá</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewOptionBig}>
                    <View style={styles.viewOption}>
                      <Text style={styles.textMota}>Chọn loại hoàng </Text>
                      <Text style={styles.textDecription}>Size M Size X Size XL</Text>
                    </View>
                    <View style={styles.viewShop}>
                      <Image
                        style={styles.avatar}
                        source={require('../../../../image/catAvatar.jpg')}
                      />
                      <View>
                        <Text style={styles.name}>Do Phu Vu</Text>
                        <View style={styles.viewRow}>
                          <Image
                            style={styles.iconMap}
                            source={require('../../../../image/map.png')}
                          />
                          <Text style={styles.textMap}>Đà Nẵng</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.btnViewShop}>
                        <Text style={styles.textBtnViewShop}>Xem Shop</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.viewOption}>
                      <Text style={styles.textMota}>Top sản phẩm bán chạy</Text>
                      <Text style={styles.textDecription}> Sản Phẩm 1</Text>
                    </View>
                    <View style={styles.viewOption}>
                      <Text style={styles.textMota}>Chi tiết sản phẩm</Text>
                      <Text style={styles.textDecription}>{item.description}</Text>
                    </View>
                  </View>
                </View>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btnSubmit} onPress={this.Messge}>
            <Text style={styles.textBtn}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}