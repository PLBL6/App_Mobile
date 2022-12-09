import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from './Style'
import colors from "../../../../../colors/colors"
import HaveComment from './HaveComment/HaveComment'
import NotComment from './NotComment/NotComment'

const Tab = createMaterialTopTabNavigator();

export default class MyComment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../../image/arrowLeft.png')}
                    />
                    <Text style={styles.textTitle}>Đánh giá của tôi</Text>
                </TouchableOpacity>
                <Tab.Navigator
                    initialRouteName="HaveComment"
                    screenOptions={{
                        tabBarActiveTintColor: colors.dark,
                        tabBarIndicatorStyle: { backgroundColor: colors.dark },
                        tabBarInactiveTintColor: colors.main,
                        tabBarLabelStyle: { fontSize: 15 },
                        tabBarStyle: { backgroundColor: colors.white }
                    }}
                >
                    <Tab.Screen
                        name="HaveComment"
                        component={HaveComment}
                        initialParams={{ id: "" }}
                        options={{ tabBarLabel: 'Chưa đánh giá' }}
                    />
                    <Tab.Screen
                        name="NotComment"
                        component={NotComment}
                        initialParams={{ id: "" }}
                        options={{ tabBarLabel: 'Đã đánh giá' }}
                    />
                </Tab.Navigator>
                <View style={styles.info}>
                </View>
            </View>
        )
    }
}