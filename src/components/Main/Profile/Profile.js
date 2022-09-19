import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import styles from './Style'
import CardAndChat from "../CartAndChat/CartAndChat.js"

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../image/coverImage.jpg')}
        style={styles.cover}
      >
        <View style={styles.contain}>
          <TouchableOpacity>
            <View style={styles.tag}>
              <Text style={styles.text}>Shop của tôi </Text>
              <Image
                style={styles.arrow}
                source={require('../../../../image/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require('../../../../image/setting.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <CardAndChat />
          </View>
        </View>
        <View style={styles.contain1}>
          <Image
            style={styles.avatar}
            source={require('../../../../image/catAvatar.jpg')}
          />
          <Text style={styles.name}>Do Phu Vu</Text>
        </View>
      </ImageBackground>
      <View style={styles.contain2}>
        <Text>Emty Emty Emty Emty Emty</Text>
      </View>
    </View>
  )
}
