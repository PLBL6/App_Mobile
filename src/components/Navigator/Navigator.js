import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Login from '../Other/Login/Login';

const stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login} />
      </stack.Navigator>
    </NavigationContainer>
  )
}