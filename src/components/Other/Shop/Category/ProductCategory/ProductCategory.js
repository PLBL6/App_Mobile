import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import { getSanpham_IDDanhmucvsNhacungcap } from '../../../../../../api/nhacungcap';
import styles from './Style';

export default class ProductCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getCategory() {
    try {
      const idNhacungcap = this.props.route.params.idNhacungcap
      const iddanhmuc = this.props.route.params.iddanhmuc
      const data = await getSanpham_IDDanhmucvsNhacungcap(idNhacungcap, iddanhmuc)
      this.setState({ data: data })
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
    const { data, isLoading } = this.state;
    const tendanhmuc = this.props.route.params.tendanhmuc

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>{tendanhmuc}</Text>
        </TouchableOpacity>
          <View style={styles.containerv2}>
            {isLoading ? <ActivityIndicator /> : (
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('InfoProductShop', { id: item.id })}
                  >
                    <Image source={{ uri: item.hinhAnh }} style={styles.Image} />
                    <View style={styles.discout}>
                      <Text style={styles.textDiscount}>{item.khuyenMai}%</Text>
                      <Text style={styles.textGIAM}>GIẢM</Text>
                    </View>
                    <View style={styles.info}>
                      <Text numberOfLines={1} style={styles.textName}>{item.tenMatHang}</Text>
                      <View style={styles.info1}>
                        <Text style={styles.textPrice}>{item.gia}đ</Text>
                        <Text style={styles.textAvailable}>Đã bán {item.id}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
    )
  }
}