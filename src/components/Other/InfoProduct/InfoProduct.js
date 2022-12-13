import { Text, TouchableOpacity, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import Rating from '../Rating/Rating';
import { getChitiet_IDmathang, getRatingMathang_IDmathang, getAnhMathang_IDmathang, getMathang_IDmathang } from '../../../../api/mathangs.js'
import { getSoluongDanhgia } from '../../../../api/danhgias';
import { getNhacungcap_IDmathang, getRatingAVG_IDnhacungcap } from '../../../../api/nhacungcap';
import ArrayMausac from '../../ListImage/ArrayMausac'
import ArrayKichco from '../../ListImage/ArrayKichco';

export default class InfoProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      imageData: [],
      chitietData: [],
      ratingTBData: [],
      numberRating: [],
      nhaCungcap: [],
      avgRatingNCC: [],
      active: 0,
      arrayholder: [],
      mausac: [],
      kichco: [],
      valueSelect: 0,
      detail: ''
    };
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  onClickAddCart(data, id, detail, cost) {
    if (detail !== '') {
      const itemcart = {
        product: data,
        number: 1,
        totalPrice: data["gia"],
        idDetail: id,
        detail: detail,
        cost: cost
      }

      AsyncStorage.getItem('cart').then((datacart) => {
        if (datacart !== null) {
          const cart = JSON.parse(datacart)
          var foundIndex = cart.findIndex(function (item) {
            return item.idDetail == id;
          });

          if (foundIndex !== -1) {
            let number = cart[foundIndex].number
            let totalPrice = cart[foundIndex].totalPrice
            let price = cart[foundIndex].product["gia"]

            cart[foundIndex].number = number + 1
            cart[foundIndex].totalPrice = totalPrice + price
            AsyncStorage.setItem('cart', JSON.stringify(cart))
          }
          else {
            cart.push(itemcart)
            AsyncStorage.setItem('cart', JSON.stringify(cart))
          }
        }
        else {
          const cart = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart', JSON.stringify(cart))
        }
        alert("Đã thêm vào giỏ hàng !")
      })
        .catch((err) => {
          alert(err)
        })
    }
    else {
      alert("Vui lòng chọn loại hàng !")
    }

  }

  selectHandler(value) {
    this.setState({ valueSelect: value.id });
    const detail = ArrayMausac()[value.maMS - 1] + ' - Size:' + ArrayKichco()[value.maKC - 1];
    this.setState({ detail: detail });
  };

  async getProducts() {
    try {
      this.setState({ mausac: ArrayMausac() });
      this.setState({ kichco: ArrayKichco() });

      const id = this.props.route.params.id
      this.setState({ data: await getMathang_IDmathang(id) });
      this.setState({ imageData: await getAnhMathang_IDmathang(id) });
      this.setState({ ratingTBData: await getRatingMathang_IDmathang(id) });
      this.setState({ numberRating: await getSoluongDanhgia(id) });
      this.setState({ chitietData: await getChitiet_IDmathang(id) });
      this.setState({ nhaCungcap: await getNhacungcap_IDmathang(id) });
      this.setState({ avgRatingNCC: await getRatingAVG_IDnhacungcap(id) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { data, imageData, chitietData, ratingTBData, numberRating, nhaCungcap, isLoading, avgRatingNCC, mausac, kichco, valueSelect, detail } = this.state;

    var priceNotDiscount = data["gia"] + data["gia"] * (data["khuyenMai"] / 100)

    var image = []
    imageData.map((item) => (
      image.push(item.anh)
    ))

    for (let i = image.length - 1; i >= 0; i--) {
      if (image[i] == "")
        image[i] = 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-empty-box-icon-for-your-project-png-image_4820798.jpg'
    }

    var ratingTB
    if (ratingTBData == null)
      ratingTB = 0
    else
      ratingTB = Math.round(ratingTBData * 10) / 10

    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          {isLoading ? <ActivityIndicator /> : (
            <ScrollView>
              <View style={styles.viewImage}>
                <ScrollView
                  pagingEnabled
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  onScroll={this.change}
                  style={styles.scrollView}
                >
                  {
                    image.map((image, index) => (
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

                <TouchableOpacity style={styles.btnCart} onPress={() => this.props.navigation.navigate('Cart')}>
                  <Image
                    source={require('../../../../image/cartv2.png')}
                    style={styles.iconArrow}
                  />
                </TouchableOpacity>

                <View style={styles.dotView}>
                  {
                    image.map((i, k) => (
                      <Text key={k} style={k == this.state.active ? styles.dotActive : styles.dotNotActive}>●</Text>
                    ))
                  }
                </View>
              </View>
              <View style={styles.info}>
                <View style={styles.info2}>
                  <Text style={styles.textName}>{data["tenMatHang"]}</Text>
                </View>
                <View style={styles.info1}>
                  <View style={styles.viewInfo1}>
                    <Text style={styles.textPrice}>{data["gia"]} vnđ</Text>
                    <Text style={styles.textSale}>Đã bán: 0 | {data["khuyenMai"]}% GIẢM</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Comment', { thumbnail: data["hinhAnh"], idMathang: data["id"] })} style={styles.viewInfo2}>
                    <View style={styles.info3}>
                      <Text style={styles.textRating}>{ratingTB}</Text>
                      <Rating rating={ratingTB} />
                      <Image
                        style={styles.iconArrowRating}
                        source={require('../../../../image/arrowRight.png')}
                      />
                    </View>
                    <Text style={styles.textSale}>Dựa trên {numberRating} đánh giá</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewOptionBig}>
                  <View style={styles.viewOption}>
                    <Text style={styles.textMota}>Chọn loại hoàng </Text>
                    <View style={styles.viewPhanloai}>
                      <View>
                        {
                          chitietData.map((item, index) => (
                            <TouchableOpacity
                              style={
                                item.id === valueSelect ? styles.selected : styles.unselected
                              }
                              key={index}
                              onPress={() => this.selectHandler(item)}>
                              <Text style={item.id === valueSelect ? styles.textSaleSelected : styles.textSale}>{mausac[item.maMS - 1]} - Size: {kichco[item.maKC - 1]}</Text>
                            </TouchableOpacity>
                          ))
                        }
                      </View>
                      <View>
                        {
                          chitietData.map((item, index) => (
                            <View key={index} style={styles.phanloai1}>
                              <Text style={styles.textSale}>{item.soLuong} sản phẩm có sẵn </Text>
                            </View>
                          ))
                        }
                      </View>
                    </View>
                  </View>
                  <View style={styles.viewShop}>
                    <Image
                      style={styles.avatar}
                      source={{ uri: nhaCungcap["anhDaiDien"] }}
                    />
                    <View style={styles.shopinfo}>
                      <Text style={styles.name}>{nhaCungcap["tenNguoiDung"]}</Text>
                      <View style={styles.viewRow}>
                        <Image
                          style={styles.iconMap}
                          source={require('../../../../image/map.png')}
                        />
                        <Text style={styles.textMap}>{nhaCungcap["diaChi"]}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.btnViewShop} onPress={() => this.props.navigation.navigate('Shop', { shop: nhaCungcap, avg: avgRatingNCC })}>
                      <Text style={styles.textBtnViewShop}>Xem Shop</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewOption}>
                    <Text style={styles.textMota}>Top sản phẩm bán chạy</Text>
                    <Text style={styles.textDecription}> Sản Phẩm 1</Text>
                  </View>
                  <View style={styles.viewOption}>
                    <Text style={styles.textMota}>Chi tiết sản phẩm</Text>
                    <Text style={styles.textDecription}>{data["moTa"]}</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.onClickAddCart(data, valueSelect, detail, priceNotDiscount)}>
            <Text style={styles.textBtn}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}