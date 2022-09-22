import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'

import SignIn from './src/components/Other/Login/SignIn/SignIn'
import TabBar from './src/components/TabBar/TabBar'
import Profile from './src/components/Main/Profile/Profile';


const stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName='TabBar' screenOptions={{headerShown:false}}>
          <stack.Screen name='TabBar' component={TabBar}/>
          <stack.Screen name='SignIn' component={SignIn}/>
          <stack.Screen name='Profile' component={Profile} />
        </stack.Navigator>
      </NavigationContainer>

    )
  
}