import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'
import { update_PasswordKH } from '../../../../../../api/Method/put';

export default class ChangePass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pass: '',
      passNew: '',
      rePassNew: ''
    };
  }

  setValue(text, index) {
    if (index === 1)
      this.setState({ pass: text })
    if (index === 2)
      this.setState({ passNew: text })
    if (index === 3)
      this.setState({ rePassNew: text })
  }

  async changPassword(idKH, token) {
    const pass = this.state.pass
    const newPass = this.state.passNew
    const rePassNew = this.state.rePassNew

    if (newPass === rePassNew) {
      const message = await update_PasswordKH(pass, newPass, token, idKH)
      if (message === "Wrong password")
        alert('Vui lòng nhập đúng mật khẩu cũ !!!')
      else {
        alert('Đổi mật khẩu thành công !!!')
        this.setState({ pass: '', passNew: '', rePassNew: '' })
      }
    }
    else
      alert('Mật khẩu nhập lại không trùng khớp !!!')
  }

  render() {
    const idKH = this.props.route.params.idKH
    const token = this.props.route.params.token
    const { pass, passNew, rePassNew } = this.state

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
          <Image
            style={styles.iconArrow}
            source={require('../../../../../../image/arrowLeft.png')}
          />
          <Text style={styles.textTitle}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <View style={styles.body}>
          <View style={styles.viewItem}>
            <Text style={styles.text}>Mật khẩu cũ:</Text>
            <TextInput secureTextEntry={true} style={styles.inputText} onChangeText={text => this.setValue(text, 1)} >{pass}</TextInput>
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.text}>Mật khẩu mới:</Text>
            <TextInput secureTextEntry={true} style={styles.inputText} onChangeText={text => this.setValue(text, 2)} >{passNew}</TextInput>
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.text}>Nhập lại mk mới:</Text>
            <TextInput secureTextEntry={true} style={styles.inputText} onChangeText={text => this.setValue(text, 3)} >{rePassNew}</TextInput>
          </View>
          <TouchableOpacity style={styles.viewBtn} onPress={() => this.changPassword(idKH, token)}>
            <Text style={styles.textBtn}>Đổi mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}