import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'

import SignIn from './src/components/Other/Login/SignIn/SignIn'
import SignUp from './src/components/Other/Login/SignUp/SignUp'
import TabBar from './src/components/TabBar/TabBar'
import Profile from './src/components/Main/Profile/Profile';
import InfoProduct from './src/components/Other/InfoProduct/InfoProduct';


const stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName='TabBar' screenOptions={{headerShown:false}}>
          <stack.Screen name='TabBar' component={TabBar}/>
          <stack.Screen name='SignIn' component={SignIn}/>
          <stack.Screen name='SignUp' component={SignUp}/>
          <stack.Screen name='Profile' component={Profile}/>
          <stack.Screen name='InfoProduct' component={InfoProduct}/>
        </stack.Navigator>
      </NavigationContainer>

    )
  
}