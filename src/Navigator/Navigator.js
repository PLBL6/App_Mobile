import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SignIn from '../components/Other/Login/SignIn/SignIn'
import SignUp from '../components/Other/Login/SignUp/SignUp'
import TabBar from '../components/TabBar/TabBar'
import Profile from '../components/Main/Profile/Profile';
import InfoProduct from '../components/Other/InfoProduct/InfoProduct';
import InfoProductShop from '../components/Other/Shop/Product/InfoProductShop/InfoProductShop';
import Comment from '../components/Other/Comment/Comment'
import Cart from '../components/Other/Cart/Cart';
import Shop from '../components/Other/Shop/Shop';
import SalesRegistration from '../components/Other/SalesRegistration/SalesRegistration';
import SettingInfo from '../components/Main/Profile/SettingInfo/SettingInfo';
import Repurchase from '../components/Main/Profile/Repurchase/Repurchase';
import Purchase from '../components/Main/Profile/Purchase/Purchase';
import MyComment from '../components/Main/Profile/MyComment/MyComment';
import EditInfo from '../components/Main/Profile/SettingInfo/EditInfo/EditInfo';
import ChangePass from '../components/Main/Profile/SettingInfo/ChangePass/ChangePass';
import Paypal from '../components/Other/Cart/Paypal/Paypal';
import ProductCategory from '../components/Other/Shop/Category/ProductCategory/ProductCategory';
import CreateNew from '../components/Other/Comment/CreateNew/CreateNew';

const stack = createNativeStackNavigator();

export default function Navigator() {
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
          <stack.Screen name='EditInfo' component={EditInfo}/>
          <stack.Screen name='ChangePass' component={ChangePass}/>
          <stack.Screen name='Paypal' component={Paypal}/>
          <stack.Screen name='ProductCategory' component={ProductCategory}/>
          <stack.Screen name='CreateNew' component={CreateNew}/>
        </stack.Navigator>
      </NavigationContainer>
    )
  
}