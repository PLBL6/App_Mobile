import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { getMathangDamua_IdKH } from '../../../../../api/mathangs';

export default class ListOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataDamua: []
    };
  }

  async getProductsDamua() {
    try {
      const id = this.props.data.id
      this.setState({ dataDamua: await getMathangDamua_IdKH(id) })
    } catch (error) {
      console.log(error);
    } 
  }

  componentDidMount() {
    this.getProductsDamua()
  }

  render() {
    const navigation = this.props.navigation
    const route = this.props.route
    const dataUser = this.props.data
    const token = this.props.token

    const {dataDamua} = this.state

    return (
      <View>
        <View style={styles.viewOption}>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('Purchase') : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/purchase.png')} />
              <Text style={styles.textTitle}>Đơn Mua</Text>
            </View>
            <Text style={styles.textClick}>Xem lịch sử mua hàng  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('MyComment', {idKH: dataUser.id}) : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/evaluate.png')} />
              <Text style={styles.textTitle}>Đánh giá của tôi</Text>
            </View>
            <Text style={styles.textClick}>➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('SettingInfo', {data: dataUser, token: token}) : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/profile.png')} />
              <Text style={styles.textTitle}>Thiết lập thông tin</Text>
            </View>
            <Text style={styles.textClick}> ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose} onPress={() => route ? navigation.navigate('Repurchase', {dataDamua: dataDamua}) : navigation.navigate('SignIn', {newUser: null})}>
            <View style={styles.viewTitle}>
              <Image style={styles.imageIcon} source={require('../../../../../image/IconFrofile/bagShopping.png')} />
              <Text style={styles.textTitle}>Mua lại</Text>
            </View>
            <Text style={styles.textClick}>Xem thêm sản phẩm ➤</Text>
          </TouchableOpacity>
          {
            route ? (
              <FlatList
                data={dataDamua}
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <TouchableOpacity key={index} style={styles.viewProduct}>
                    <Image source={{ uri: item.hinhAnh }} style={styles.ImageProduct} />
                    <Text numberOfLines={1} style={styles.textBtn1}>{item.tenMatHang}</Text>
                    <View style={styles.viewPrice}>
                      <Text style={styles.textBtn2}>${item.gia}</Text>
                      <Image style={styles.imageCart} source={require('../../../../../image/IconFrofile/cart.png')} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : 
            null
          }
        </View>
      </View>
    )
  }
}