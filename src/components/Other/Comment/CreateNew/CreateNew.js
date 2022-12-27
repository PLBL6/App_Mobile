import { Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { Component } from 'react'
import { Rating } from 'react-native-ratings';

import styles from './Style'
import { create_DanhGia } from '../../../../../api/Method/post'

export default class CreateNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      content: ''
    };
  }

  setValue(text) {
    this.setState({ content: text })
  }

  async createDanhgia(idMathang, idKH, token) {
    const rating = this.state.rating
    const content = this.state.content

    let body = {
      'noiDung': content,
      'xepHang': rating,
      'matHang': idMathang,
      'khachHang': idKH
    }

    await create_DanhGia(body, token)
    alert('Tạo đánh giá thành công !!!')
    this.props.navigation.goBack()
  }

  setRating = (rating) => {
    this.setState({ rating: rating })
  }

  render() {
    const idMathang = this.props.route.params.idMathang
    const idKH = this.props.route.params.idKH
    const token = this.props.route.params.token

    const {content} = this.state

    const danhGiacosan = [
      'Chất lượng sản phẩm tuyệt vời',
      'Đóng gói sản phẩm rất tốt',
      'shop tư vấn rất nhiệt tình',
      'Giao hàng nhanh hơn dự kiến',
      'Sản phẩm giá cả hợp lý nên mua'
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle1}>Đánh giá sản phẩm</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <Rating
            showRating
            onFinishRating={this.setRating}
            style={{ paddingVertical: 5 }}
            startingValue={0}
          />
          <View style={styles.viewPading}>
            <Text style={styles.textTitle}>Nội dung đánh giá:</Text>
            <View style={styles.textAreaContainer} >
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                onChangeText={text => this.setValue(text)}
                value={content}
              />
            </View>
            <FlatList
              data={danhGiacosan}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.viewBtnCosan} onPress={() => this.setValue(item)}>
                  <Text style={styles.viewTextCosan}>{item}</Text>
                </TouchableOpacity>
                )}
            />
          </View>
          <TouchableOpacity style={styles.viewBtn} onPress={() => this.createDanhgia(idMathang, idKH, token)}>
            <Text style={styles.textBtn}>Tạo đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}