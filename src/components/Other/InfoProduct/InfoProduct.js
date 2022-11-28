import { Text, TouchableOpacity, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import Rating from '../Rating/Rating';

export default class InfoProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      imageData: [],
      mausacData: [],
      ratingTBData: [],
      active: 0,
      arrayholder: []
    };
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

  async getProducts() {
    try {
      const mathangID = await fetch('https://backend-api-server-endcode.herokuapp.com/api/get-mathangs?idMatHang=' + this.props.route.params.id);
      const mathangIDJson = await mathangID.json();
      this.setState({ data: mathangIDJson.mathangs });

      const listanhID = await fetch('https://backend-api-server-endcode.herokuapp.com/api/get-all-hinh-anh-mathangs-by-id-mathang?matHangID=' + this.props.route.params.id);
      const listanhIDJson = await listanhID.json();
      this.setState({ imageData: listanhIDJson.hinhanhs });

      const mausacID = await fetch('https://backend-api-server-endcode.herokuapp.com/api/get-all-hinh-anh-mathangs-by-id-mathang?matHangID=' + this.props.route.params.id);
      const mausacIDJson = await mausacID.json();
      this.setState({ mausacData: mausacIDJson.mausac });

      const ratingTBID = await fetch('https://backend-api-server-endcode.herokuapp.com/api/get-avg-rating-by-id-mathang?idMatHang=' + this.props.route.params.id);
      const ratingTBIDJson = await ratingTBID.json();
      this.setState({ ratingTBData: ratingTBIDJson });
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
    const { data, imageData, mausacData, ratingTBData, isLoading } = this.state;
    const isBackProduct = this.props.route.params.isBackProduct

    var image = []
    imageData.map((item) => (
      image.push(item.anh)
    ))

    var ratingTB
    if( ratingTBData["avgrating"] == null)
      ratingTB = 0
    else
      ratingTB = Math.round(ratingTBData["avgrating"] * 10) / 10

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

                <TouchableOpacity style={styles.btnBack} onPress={() => isBackProduct ? this.props.navigation.navigate('Shop') : this.props.navigation.goBack()}>
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Comment', { thumbnail: data["hinhAnh"] })} style={styles.viewInfo2}>
                    <View style={styles.info3}>
                      <Text style={styles.textRating}>{ratingTB}</Text>
                      <Rating rating={ratingTB} />
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
                    <Text style={styles.textDecription}>Màu</Text>
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
                    <TouchableOpacity style={styles.btnViewShop} onPress={() => this.props.navigation.navigate('Shop')}>
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
          <TouchableOpacity style={styles.btnSubmit} onPress={this.Messge}>
            <Text style={styles.textBtn}>ADD TO BAG</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}