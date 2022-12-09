import { ActivityIndicator, FlatList, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import CardAndChat from "../CartAndChat/CartAndChat.js"
import styles from './Style.js'
import { getMathang, getMathang_Danhmuc, getMathang_Tenmathang } from '../../../../api/mathangs.js'
import { getDanhmuc } from '../../../../api/danhmucs.js'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataTemp: [],
      isLoading: true,
      text: '',
      arrayholder: []
    };
  }

  async getProducts() {
    try {
      this.setState({ data: await getMathang() });
      this.arrayholder = await getMathang()
      this.setState({ dataTemp: await getDanhmuc()});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  componentDidMount() {
    this.getProducts();
  }

  async onChangeText(name) {
    try {
      this.setState({ data: await getMathang_Tenmathang(name) });
    } catch (error) {
      console.log(error);
    }
  }

  async filterCategory(idDanhMuc) {
    try {
      this.setState({ data: await getMathang_Danhmuc(idDanhMuc) });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data, isLoading, dataTemp } = this.state;
    const navigation = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.contain}>
          <View style={styles.SectionStyle}>
            <Image source={require('../../../../image/search.png')} style={styles.ImageStyle} />
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm sản phẩm"
              underlineColorAndroid="transparent"
              onChangeText={name => this.onChangeText(name)}
            />
          </View>
          <View>
            <CardAndChat navigation={navigation} />
          </View>
        </View>
        <View style={styles.containerv1}>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={dataTemp}
              keyExtractor={({ id }, index) => id}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categori} onPress={() => this.filterCategory(item.id)}>
                  <Image source={require('../../../../image/search.png')} style={styles.ImageCategory}/>
                  <Text style={styles.textCategory}>{item.tenDanhMuc}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={styles.containerv2}>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate('InfoProduct', { id: item.id})}
                >
                  <Image source={{ uri: item.hinhAnh }} style={styles.Image} />
                  <View style={styles.discout}>
                    <Text style={styles.textDiscount}>{item.khuyenMai}%</Text>
                    <Text style={styles.textGIAM}>GIẢM</Text>
                  </View>
                  <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.textName}>{item.tenMatHang}</Text>
                    <View style={styles.info1}>
                      <Text style={styles.textPrice}>đ{item.gia}</Text>
                      <Text style={styles.textAvailable}>Đã bán 0</Text>
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
