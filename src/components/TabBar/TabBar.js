import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Style';
import Home from '../Main/Home/Home';
import Profile from '../Main/Profile/Profile';

function HomeScreen({navigation}) {
  return (
    <View>
      <Home navigation = {navigation}/>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View>
      <Profile navigation = {navigation}/>
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
            tabBarStyle: { height: 55 }
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
            name="Walk"
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles(focused).tabBarIcon}>
                  <Image
                    source={require('../../../image/walk.png')}
                    resizeMode='contain'
                    style={styles(focused).icon}
                  />
                  <Text style={styles(focused).text}>
                    Dạo
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
            component={HomeScreen} />
          <Tab.Screen
            name="Notify"
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles(focused).tabBarIcon}>
                  <Image
                    source={require('../../../image/notify.png')}
                    resizeMode='contain'
                    style={styles(focused).icon}
                  />
                  <Text style={styles(focused).text}>
                    Thông báo
                  </Text>
                </View>
              ),
              headerShown: false
            }}
            component={HomeScreen} />
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