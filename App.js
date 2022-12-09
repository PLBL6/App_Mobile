import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SignIn from './src/components/Other/Login/SignIn/SignIn'
import SignUp from './src/components/Other/Login/SignUp/SignUp'
import TabBar from './src/components/TabBar/TabBar'
import Profile from './src/components/Main/Profile/Profile';
import InfoProduct from './src/components/Other/InfoProduct/InfoProduct';
import InfoProductShop from './src/components/Other/Shop/Product/InfoProductShop/InfoProductShop';
import Comment from './src/components/Other/Comment/Comment'
import Cart from './src/components/Other/Cart/Cart';
import Shop from './src/components/Other/Shop/Shop';
import SalesRegistration from './src/components/Other/SalesRegistration/SalesRegistration';
import SettingInfo from './src/components/Main/Profile/SettingInfo/SettingInfo';
import Repurchase from './src/components/Main/Profile/Repurchase/Repurchase';
import Purchase from './src/components/Main/Profile/Purchase/Purchase';
import MyComment from './src/components/Main/Profile/MyComment/MyComment';

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
          <stack.Screen name='Comment' component={Comment}/>
          <stack.Screen name='Cart' component={Cart}/>
          <stack.Screen name='Shop' component={Shop}/>
          <stack.Screen name='InfoProductShop' component={InfoProductShop}/>
          <stack.Screen name='SalesRegistration' component={SalesRegistration}/>
          <stack.Screen name='SettingInfo' component={SettingInfo}/>
          <stack.Screen name='Repurchase' component={Repurchase}/>
          <stack.Screen name='Purchase' component={Purchase}/>
          <stack.Screen name='MyComment' component={MyComment}/>
        </stack.Navigator>
      </NavigationContainer>
    )
  
}