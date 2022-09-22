import { Text, TextInput, View, Image } from 'react-native'
import React, { Component }  from 'react'

import CardAndChat from "../CartAndChat/CartAndChat.js"
import styles from './Style.js'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contain}>
          <View style={styles.SectionStyle}>
            <Image source={require('../../../../image/search.png')} style={styles.ImageStyle} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              underlineColorAndroid="transparent"
            />
          </View>
          <View>
            <CardAndChat />
          </View>
        </View>
        <View style={styles.contain2}>
          <Text>kokkkokoko</Text>
        </View>
      </View>
    )
  }
}
