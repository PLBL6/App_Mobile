import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import styles from '../Comment/Style'
import colors from '../../../../colors/colors'
import Rating from '../Rating/Rating';
import { getDanhgia_byID, getAnhDanhgia_byIDDanhgia } from '../../../../api/danhgias';
import { getKhachhang_byID } from '../../../../api/khachhang';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      danhgia: [],
      isLoading: true,
      token: this.props.route.params.token,
      idKH: this.props.route.params.idKH,
      idMathang: this.props.route.params.idMathang,
      notAnh: []
    };
  }

  async getComment() {
    try {
      const id = this.state.idMathang
      const dataPush = this.state.danhgia
      const notAnh = this.state.notAnh
      const data = await getDanhgia_byID(id)
      await Promise.all(data.map(async (item) => {
        const token = this.state.token
        const khachhang = await getKhachhang_byID(item.khachHang, token)
        const anh = await getAnhDanhgia_byIDDanhgia(item.id)

        let dataDG = {
          "anhKH": khachhang.anhDaiDien,
          "tenKH": khachhang.tenNguoiDung,
          "rating": item.xepHang,
          "content": item.noiDung,
          "ngayTao": item.createdAt,
          "listAnh": anh
        }
        if(anh.length === 0)  
            notAnh.push(1)
        dataPush.push(dataDG)
      }))
      this.setState({ danhgia: dataPush, notAnh: notAnh});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.getComment();
    });
  }


  render() {
    const thumbnail = this.props.route.params.thumbnail
    const { danhgia, isLoading, notAnh, token, idKH, idMathang } = this.state;
    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

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
              <View style={styles.option1Item}>
                <Text>Tất cả</Text>
                <Text style={styles.textNumber}>({danhgia.length})</Text>
              </View>
              <View style={styles.option1Item}>
                <Text>Có hình ảnh</Text>
                <Text style={styles.textNumber}>({danhgia.length - notAnh.length})</Text>
              </View>
              <View style={styles.option1Item}>
                <Text>Sao</Text>
                <Text style={styles.textNumber}>(Tất cả)</Text>
              </View>
              <TouchableOpacity style={styles.optionReview} onPress={() => this.props.navigation.navigate('CreateNew', {idMathang: idMathang, idKH: idKH, token: token})}>
                <Text style={styles.textReview}>Đánh giá</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isLoading ?
            <View style={styles.ViewLoading}>
              <ActivityIndicator color={colors.mainHome} size={25} />
              <Text style={styles.textName}>Đang tải dữ liệu</Text>
            </View> : (
              <FlatList
                data={danhgia}
                initialNumToRender={10}
                renderItem={({ item }) => (
                  <View key={item.id} style={styles.view2}>
                    <Image
                      style={styles.avatar}
                      source={{ uri: item.anhKH }}
                    />
                    <View style={styles.viewBig}>
                      <Text style={styles.textAll}>{item.tenKH} </Text>
                      <View style={styles.rating}>
                        <Rating rating={item.rating} />
                      </View>
                      {/* <Text style={styles.textAll}>Phân loại: Áo sơ mi xanh size XL </Text> */}
                      <Text style={styles.textCommen}>{item.content}</Text>
                      <FlatList
                        data={item.listAnh}     
                        horizontal={true}
                        renderItem={({ item }) => (
                          <Image key={item.id} source={{ uri: item.anh }} style={styles.ImageComen} />
                        )}
                      />
                      <Text style={styles.textAll}>{formatDate(new Date(item.ngayTao))}</Text>
                      {/* <View style={styles.viewFeedback}>
                  <Text style={styles.textSaleChat}>Phản hồi của người bán:</Text>
                  <Text style={styles.textSaleChatComen}>Thank you for your purchase and taking the time to write a product review. Customer reviews is important to us and we value your response. If you have any questions, please contact our customer service.All responses will be used to further improve the quality of our service and products.Sorry for the inconvenience and thank you for giving us the opportunity to rectify the matter.😔😔</Text>
                </View> */}
                    </View>
                  </View>
                )}
              />
            )}
        </View>
      </View>
    )
  }
}