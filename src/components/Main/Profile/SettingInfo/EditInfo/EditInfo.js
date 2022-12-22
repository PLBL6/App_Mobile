import { Text, View, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { update_Khachhang } from '../../../../../../api/Method/put';

export default class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTemp: [],
      ho: '',
      ten: '',
      gioiTinh: '',
      ngaySinh: '',
      diaChi: '',
      sdt: '',
      email: '',
      anhDaiDien: ''
    };
  }

  setValue(text, index) {
    if (index === 1)
      this.setState({ ho: text })
    if (index === 2)
      this.setState({ ten: text })
    if (index === 3)
      this.setState({ gioiTinh: text })
    if (index === 4)
      this.setState({ ngaySinh: text })
    if (index === 5)
      this.setState({ diaChi: text })
    if (index === 6)
      this.setState({ sdt: text })
    if (index === 7)
      this.setState({ email: text })
    if (index === 8)
      this.setState({ anhDaiDien: text })
  }

  UpdateKH(idKH, token) {
    const data = this.props.route.params.data
    if (this.state.ho !== '')
      data.ho = this.state.ho
    if (this.state.ten !== '')
      data.ten = this.state.ten
    if (this.state.gioiTinh !== '')
      data.gioiTinh = this.state.gioiTinh
    if (this.state.ngaySinh !== '')
      data.ngaySinh = this.state.ngaySinh
    if (this.state.diaChi !== '')
      data.diaChi = this.state.diaChi
    if (this.state.sdt !== '')
      data.sdt = this.state.sdt
    if (this.state.email !== '')
      data.email = this.state.email
    if (this.state.anhDaiDien !== '')
      data.anhDaiDien = this.state.anhDaiDien

    update_Khachhang(data, idKH, token)
  }


  render() {
    const data = this.props.route.params.data
    const token = this.props.route.params.token

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <ImageBackground style={styles.imageCover} source={require('../../../../../../image/coverImage.jpg')}>
            <Image style={styles.imageAvatar} source={{ uri: data.anhDaiDien }} />
          </ImageBackground>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Họ</Text>
            <TextInput style={styles.textClick} placeholder={data.ho} onChangeText={text => this.setValue(text, 1)} />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Tên</Text>
            <TextInput style={styles.textClick} placeholder={data.ten} onChangeText={text => this.setValue(text, 2)} />
          </View>
          <View style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Giới tính</Text>
            {
              data.gioiTinh ? <Text style={styles.textClick}>Nam  </Text> : <Text style={styles.textClick}>Nữ  </Text>
            }
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Ngày sinh</Text>
            <Text style={styles.textClick}>{data.ngaySinh.split('T')[0]}  </Text>
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Địa chỉ</Text>
            <TextInput style={styles.textClick} placeholder={data.diaChi} onChangeText={text => this.setValue(text, 5)} />
          </View>
          <View style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Số điện thoại</Text>
            <TextInput style={styles.textClick} placeholder={data.sdt.toString()} onChangeText={text => this.setValue(text, 6)} />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Email</Text>
            <TextInput style={styles.textClick} placeholder={data.email} onChangeText={text => this.setValue(text, 7)} />
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.UpdateKH(data.id, token)}>
            <Text style={styles.textBtn}>Cập Nhật</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}