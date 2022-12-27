import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class SettingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  refreshData() {
    this.setState({ data: this.props.route.params.data })
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.refreshData()
    });
  }

  render() {
    const token = this.props.route.params.token
    const { data } = this.state

    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
            <Image
              style={styles.iconArrow}
              source={require('../../../../../image/arrowLeft.png')}
            />
            <Text style={styles.textTitle}>Hồ sơ của tôi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEdit} onPress={() => this.props.navigation.navigate('EditInfo', { data: data, token: token })}>
            <Image
              style={styles.iconEdit}
              source={require('../../../../../image/IconFrofile/editProfile.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <ImageBackground style={styles.imageCover} source={require('../../../../../image/coverImage.jpg')}>
            <Image
              style={styles.imageAvatar}
              source={data.anhDaiDien === null ? (data.gioiTinh ? require('../../../../../image/IconFrofile/mall.png') : require('../../../../../image/IconFrofile/femall.png')) : { uri: data.anhDaiDien }}
            />
          </ImageBackground>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Họ</Text>
            <Text style={styles.textClick}>{data.ho}  </Text>
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Tên</Text>
            <Text style={styles.textClick}>{data.ten}  </Text>
          </View>
          <View style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Giới tính</Text>
            {
              data.gioiTinh ? <Text style={styles.textClick}>Nam  </Text> : <Text style={styles.textClick}>Nữ  </Text>
            }

          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Ngày sinh</Text>
            {
              data.ngaySinh !== null ? <Text style={styles.textClick}>{formatDate(new Date(data.ngaySinh))}  </Text> : <Text style={styles.textClick}> </Text>
            }
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Địa chỉ</Text>
            <Text style={styles.textClick}>{data.diaChi}  </Text>
          </View>
          <View style={styles.viewChoose1}>
            <Text style={styles.textTitleInfo}>Số điện thoại</Text>
            <Text style={styles.textClick}>{data.sdt}  </Text>
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.textTitleInfo}>Email</Text>
            <Text style={styles.textClick}>{data.email}  </Text>
          </View>
          <TouchableOpacity style={styles.viewChangePass} onPress={() => this.props.navigation.navigate('ChangePass', { idKH: data.id, token: token })}>
            <Text style={styles.textChangePass}>Đổi mật khẩu</Text>
            <Text style={styles.textChangePass}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}