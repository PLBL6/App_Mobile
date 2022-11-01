import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from './Style'

export default class Category extends Component {
  category = [
    { image: 'https://www.bachcoffee.com/Resources/BachCoffee/Files/San-pham/Ca%20Phe%20Hat%20Moc%201.jpg', title: 'Cà Phê Phin Giấy', number: 6 },
    { image: 'http://sieuthitratuiloc.com/wp-content/uploads/2019/12/tra-sen-tui-loc-hop-thiec-1.jpg', title: 'Trà Túi Thiết', number: 10 },
    { image: 'https://salt.tikicdn.com/ts/tmp/53/cc/05/7fc7748f149ea79e22b25412f81fa7ca.png', title: 'Bột Matcha Trà xanh', number: 30 }
  ]

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.category.map((item, index) => (
              <TouchableOpacity key={index} style={styles.item}>
                <View style={styles.item1}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.info}>
                    <Text style={styles.textName}>{item.title}</Text>
                    <Text style={styles.textNumber}>{item.number} sản phẩm</Text>
                  </View>
                </View>
                <Image source={require('../../../../../image/arrowRightBlack.png')} style={styles.iconArrow} />
              </TouchableOpacity>
            ))
          }
          <TouchableOpacity style={styles.item}>
            <View style={styles.infoTotal}>
              <Text style={styles.textName}>Sản phẩm</Text>
              <Text style={styles.textNumber}>1103 sản phẩm</Text>
            </View>
            <Image source={require('../../../../../image/arrowRightBlack.png')} style={styles.iconArrow} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}