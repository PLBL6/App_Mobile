import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from '../Comment/Style'
import Rating from '../Rating/Rating';
import { getDanhgia } from '../../../../api/danhgias';
import { getKhachhang_IDkhachhang } from '../../../../api/khachhang';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      danhgia: [],
      isLoading: true,
    };
  }

  async getComment() {
    try {
      const id = this.props.route.params.idMathang
      this.setState({ danhgia: await getDanhgia(id) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  componentDidMount() {
    this.getComment();
  }


  render() {
    const thumbnail = this.props.route.params.thumbnail
    const { danhgia, isLoading } = this.state;

    const Images = [
      "https://www.chupsanpham.net/wp-content/uploads/2017/07/bat-mi-cach-chup-anh-quan-ao-thoi-trang-dep-khi-ban-hang-online-02.jpg",
      "https://artia.vn/wp-content/uploads/2020/12/Baby-Solid-Knitted-Style-Long-sleeve-Romper-800x800.jpg"
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Đánh giá</Text>
          <Image source={{ uri: thumbnail }} style={styles.Image} />
        </TouchableOpacity>
        <View style={styles.info}>
          <View style={styles.view1}>
            <View style={styles.option1}>
              <TouchableOpacity style={styles.option1Item}>
                <Text>Tất cả</Text>
                <Text style={styles.textNumber}>(32)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option1Item}>
                <Text>Có hình ảnh</Text>
                <Text style={styles.textNumber}>(32)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option1Item}>
                <Text>Sao</Text>
                <Text style={styles.textNumber}>(Tất cả)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option1Item}>
                <Text>Phân loại</Text>
                <Text style={styles.textNumber}>(Tất cả)</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            {
              danhgia.map((item, index) => (
                <View key={index} style={styles.view2}>
                  <Image
                    style={styles.avatar}
                    source={require('../../../../image/catAvatar.jpg')}
                  />
                  <View>
                    <Text style={styles.textAll}>Đỗ Phú Vũ </Text>
                    <View style={styles.rating}>
                      <Rating rating={item.xepHang} />
                    </View>
                    {/* <Text style={styles.textAll}>Phân loại: Áo sơ mi xanh size XL </Text> */}
                    <Text style={styles.textCommen}>{item.noiDung}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '80%' }}>
                      {
                        Images.map((item, index) => (
                          <Image key={index} source={{ uri: item }} style={styles.ImageComen} />
                        ))
                      }
                    </View>
                    <Text style={styles.textAll}>{item.createdAt}</Text>
                    {/* <View style={styles.viewFeedback}>
                  <Text style={styles.textSaleChat}>Phản hồi của người bán:</Text>
                  <Text style={styles.textSaleChatComen}>Thank you for your purchase and taking the time to write a product review. Customer reviews is important to us and we value your response. If you have any questions, please contact our customer service.All responses will be used to further improve the quality of our service and products.Sorry for the inconvenience and thank you for giving us the opportunity to rectify the matter.😔😔</Text>
                </View> */}
                  </View>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}