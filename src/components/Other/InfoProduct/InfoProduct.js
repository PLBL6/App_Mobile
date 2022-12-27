import { Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Style'
import Rating from '../Rating/Rating';
import { getTop10Daban_Idmathang, getChitiet_IDmathang, getRatingMathang_IDmathang, getAnhMathang_IDmathang, getMathang_IDmathang, getDaban_Idmathang } from '../../../../api/mathangs.js'
import { getTotalDanhGia_byID } from '../../../../api/danhgias';
import { getNhacungcap_IDmathang } from '../../../../api/nhacungcap';
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
      active: 0,
      arrayholder: [],
      mausac: [],
      kichco: [],
      valueSelect: 0,
      detail: '',
      isLoggedIn: false,
      token: '',
      idKH: 0,
      dataTop: [],
      soLuong: 0
    };
  }

  checkLogin() {
    AsyncStorage.getItem('userDetail').then((userData) => {
      if (userData !== null) {
        const cartData = JSON.parse(userData)
        this.setState({ isLoggedIn: true, token: cartData[0].token, idKH: cartData[0].user['id'] })
      }
      else
        this.setState({ isLoggedIn: false })
    })
      .catch((err) => {
        alert(err)
      })
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }

  onClickAddCart(data, id, detail, cost, nhacc, soLuong) {
    if (detail !== '') {
      const itemcart = {
        product: data,
        number: 1,
        totalPrice: data["gia"],
        idDetail: id,
        detail: detail,
        cost: cost,
        nhaCungCap: nhacc,
        daBan: 0,
        soLuong: soLuong
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
            let soLuong = this.state.soLuong

            if (soLuong <= number) {
              alert('Đã vượt quá số lượng có sẵn !!!')
            }
            else {
              cart[foundIndex].number = number + 1
              cart[foundIndex].totalPrice = totalPrice + price
              AsyncStorage.setItem('cart', JSON.stringify(cart))
              alert("Đã thêm vào giỏ hàng !")
            }
          }
          else {
            cart.push(itemcart)
            AsyncStorage.setItem('cart', JSON.stringify(cart))
            alert("Đã thêm vào giỏ hàng !")
          }
        }
        else {
          const cart = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart', JSON.stringify(cart))
          alert("Đã thêm vào giỏ hàng !")
        }
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
    this.setState({ valueSelect: value.id, soLuong: value.soLuong });
    const detail = ArrayMausac()[value.maMS - 1] + ' - Size:' + ArrayKichco()[value.maKC - 1];
    this.setState({ detail: detail });
  };

  async getProducts() {
    try {
      this.setState({ mausac: ArrayMausac() });
      this.setState({ kichco: ArrayKichco() });

      const id = this.props.route.params.id
      const data = await getMathang_IDmathang(id)
      this.setState({ data: data });
      this.setState({ imageData: await getAnhMathang_IDmathang(id) });
      this.setState({ ratingTBData: await getRatingMathang_IDmathang(id) });
      this.setState({ numberRating: await getTotalDanhGia_byID(id) });
      this.setState({ chitietData: await getChitiet_IDmathang(id) });
      this.setState({ nhaCungcap: await getNhacungcap_IDmathang(id) });
      this.setState({ daBan: await getDaban_Idmathang(id) });
      const idShop = data['nhaCungCap']
      this.setState({ dataTop: await getTop10Daban_Idmathang(idShop) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.checkLogin()
      this.getProducts();
    });
  }

  render() {
    const { data, soLuong, imageData, chitietData, ratingTBData, numberRating, nhaCungcap, isLoading, mausac, kichco, valueSelect, detail, isLoggedIn, token, idKH, daBan, dataTop } = this.state;

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

                <TouchableOpacity style={styles.btnCart} onPress={() => isLoggedIn ? this.props.navigation.navigate('Cart') : this.props.navigation.navigate('SignIn', { newUser: null })}>
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
                    <Text style={styles.textPrice}>{data["gia"]} $</Text>
                    <Text style={styles.textSale}>Đã bán: {daBan} | {data["khuyenMai"]}% GIẢM</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Comment', { thumbnail: data["hinhAnh"], idMathang: data["id"], token: token, idKH: idKH })} style={styles.viewInfo2}>
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
                            item.soLuong === 0 ?
                              <View
                                style={styles.hethang}
                                key={index}>
                                <Text style={styles.textSale}>{mausac[item.maMS - 1]} - Size: {kichco[item.maKC - 1]}</Text>
                              </View>
                              :
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
                              {
                                item.soLuong === 0 ? <Text style={styles.textSale}>Đã hết hàng </Text>
                                  : <Text style={styles.textSale}>{item.soLuong} sản phẩm có sẵn </Text>
                              }
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
                    <TouchableOpacity style={styles.btnViewShop} onPress={() => this.props.navigation.navigate('Shop', { shop: nhaCungcap })}>
                      <Text style={styles.textBtnViewShop}>Xem Shop</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewOption}>
                    <Text style={styles.textMota}>Top sản phẩm bán chạy</Text>
                    {
                      dataTop === null ? <Text>Hiện chưa có sản phẩm nào được mua !!</Text> :
                        <FlatList
                          data={dataTop}
                          initialNumToRender={10}
                          horizontal={true}
                          renderItem={({ item }) => (
                            <View style={styles.viewTop}>
                              <Image source={{ uri: item.hinhAnh }} style={styles.hinhAnhTop} />
                              <View style={styles.viewTopInfo}>
                                <Text style={styles.textMota} numberOfLines={1}>{item.tenMatHang}</Text>
                                <View style={styles.viewToprow}>
                                  <Text>${item.gia}</Text>
                                  <Text>Đã bán: {item.daban}</Text>
                                </View>
                              </View>
                            </View>
                          )}
                        />
                    }
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
          <TouchableOpacity style={styles.btnSubmit} onPress={() => isLoggedIn ? this.onClickAddCart(data, valueSelect, detail, priceNotDiscount, nhaCungcap, soLuong) : this.props.navigation.navigate('SignIn', { newUser: null })}>
            <Text style={styles.textBtn}>THÊM VÀO GIỎ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}