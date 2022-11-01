import { Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React, { Component } from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from './Style'
import colors from '../../../../colors/colors';
import Category from './Category/Category';
import Product from './Product/Product';

const Tab = createMaterialTopTabNavigator();

export default class Shop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://genk.mediacdn.vn/k:thumb_w/640/2016/21-20160516-img-6625-1463647934941-1463981877095/bo-anh-nha-sach-tuyet-dep-cho-ban-nam-dai-doc-truyen-tranh-thoai-mai-tai-viet-nam.jpg' }} style={styles.header}>
          <View style={styles.view1}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                style={styles.iconArrow}
                source={require('../../../../image/arrowLeftWhite.png')}
              />
            </TouchableOpacity>
            <View style={styles.SectionStyle}>
              <Image source={require('../../../../image/search.png')} style={styles.ImageStyle} />
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm sản phẩm"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.viewShop}>
            <Image
              style={styles.avatar}
              source={require('../../../../image/catAvatar.jpg')}
            />
            <View style={styles.Info}>
              <Text style={styles.name}>Do Phu Vu</Text>
              <View style={styles.viewRow}>
                <Image
                  style={styles.iconMap}
                  source={require('../../../../image/mapWhite.png')}
                />
                <Text style={styles.textMap}>Đà Nẵng</Text>
              </View>
              <View style={styles.viewRow}>
                <Image source={require('../../../../image/ic_star_fill.png')} style={styles.iconStar}/>
                <Text style={styles.textMap}>5.0/5.0 </Text>
                <Text numberOfLines={1} style={styles.textAll}>17,9k Người theo dõi </Text>
              </View>
            </View>
            <View style={styles.view2}>
              <TouchableOpacity style={styles.btnFollowShop}>
                <Text style={styles.textBtnFollowShop}>+ Theo dõi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.info}>
          <Tab.Navigator
            initialRouteName="Product"
            screenOptions={{
              tabBarActiveTintColor: colors.dark,
              tabBarIndicatorStyle:{backgroundColor: colors.dark},
              tabBarInactiveTintColor: colors.main,
              tabBarLabelStyle: { fontSize: 15 },
              tabBarStyle: { backgroundColor: colors.white}
            }}
          >
            <Tab.Screen
              name="Product"
              component={Product}
              options={{ tabBarLabel: 'Sản phẩm' }}
            />
            <Tab.Screen
              name="Category"
              component={Category}
              options={{ tabBarLabel: 'Danh mục hàng' }}
            />
          </Tab.Navigator>
        </View>
      </View>
    )
  }
}