import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { getSanpham_IDDanhmucvsNhacungcap } from '../../../../../api/nhacungcap';
import { getDanhmuc_IDnhacungcap } from '../../../../../api/nhacungcap';
import ImageCategory from '../../../ListImage/ImageCategory';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      imageCategory: [],
      total: []
    };
  }

  async getCategory() {
    try {
      const dataPush = this.state.data
      const idNhacungcap = this.props.route.params.idNhacungcap
      const data = await getDanhmuc_IDnhacungcap(idNhacungcap)
      const tongSoluong = []
      await Promise.all(data.map(async (item) => {
        const sanpham = await getSanpham_IDDanhmucvsNhacungcap(idNhacungcap, item.id)
        let dataCategory = {
          "id": item.id,
          "ten": item.tenDanhMuc,
          "soluong": sanpham.length
        }
        dataPush.push(dataCategory)
        tongSoluong.push(sanpham.length)
      }))
      this.setState({ total: tongSoluong });
      this.setState({ data: dataPush });
      this.setState({ imageCategory: ImageCategory() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  render() {
    const { data, isLoading, imageCategory, total } = this.state;
    const idNhacungcap = this.props.route.params.idNhacungcap
    const soLuong = total.reduce(function (a, b) { return a + b; }, 0)

    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('ProductCategory', {idNhacungcap: idNhacungcap, iddanhmuc: item.id, tendanhmuc: item.ten})}>
                <View style={styles.item1}>
                  <Image source={imageCategory[item.id - 1]} style={styles.image} />
                  <View style={styles.info}>
                    <Text style={styles.textName}>{item.ten}</Text>
                    <Text style={styles.textNumber}>{item.soluong} sản phẩm</Text>
                  </View>
                </View>
                <Image source={require('../../../../../image/arrowRightBlack.png')} style={styles.iconArrow} />
              </TouchableOpacity>
            )}
          />
        )}

        <View style={styles.itemTotal}>
          <View style={styles.infoTotal}>
            <Text style={styles.textName}>Sản phẩm</Text>
            <Text style={styles.textNumber}>{soLuong} sản phẩm</Text>
          </View>
        </View>
      </View>
    )
  }
}