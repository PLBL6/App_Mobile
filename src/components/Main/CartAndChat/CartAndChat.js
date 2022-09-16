import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import styles from './Style'

export default function CartAndChat() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.icon}
                source={require('../../../../image/cart.png')}
            />
        </TouchableOpacity> 
        <TouchableOpacity>
            <Image 
                style={styles.icon}
                source={require('../../../../image/chat.png')}
            />
        </TouchableOpacity> 
    </View>
  )
}
