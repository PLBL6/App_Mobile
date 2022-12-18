import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Style';
import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';
import Sale from '../Main/Sale/Sale';
import Cart from '../Other/Cart/Cart'
import colors from '../../../colors/colors';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Home navigation={navigation} />
    </View>
  );
}

function SalesScreen({ navigation }) {
  return (
    <View>
      <Sale navigation={navigation} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Profile navigation={navigation} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class TabBar extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: '7.5%', borderTopWidth: 2, borderTopColor: colors.mainHome }
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../../image/home.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Home
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={HomeScreen} />
        <Tab.Screen
          name="Sale"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../../image/sale.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Bán
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={SalesScreen} />
        <Tab.Screen
          name="Tôi"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../../image/profile.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Tôi
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
}