import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class SettingInfo extends Component {
  render() {
    const data = this.props.route.params.data

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Hồ sơ của tôi</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <ImageBackground style={styles.imageCover} source={require('../../../../../image/coverImage.jpg')}>
            <Image style={styles.imageAvatar} source={{uri: data.anhDaiDien}} />
          </ImageBackground>
          <TouchableOpacity style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Họ</Text>
            <Text style={styles.textClick}>{data.ho}  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Tên</Text>
            <Text style={styles.textClick}>{data.ten}  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Giới tính</Text>
            {
              data.gioiTinh ? <Text style={styles.textClick}>Nam  ➤</Text> : <Text style={styles.textClick}>Nữ  ➤</Text>
            }
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Ngày sinh</Text>
            {/* <Text style={styles.textClick}>{data.ngaySinh.split('T')[0]}  ➤</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Địa chỉ</Text>
            <Text style={styles.textClick}>{data.diaChi}  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Số điện thoại</Text>
            <Text style={styles.textClick}>{data.sdt}  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Email</Text>
            <Text style={styles.textClick}>{data.email}  ➤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Đổi mật khẩu</Text>
            <Text style={styles.textClick}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}