import React, {useRef, useEffect} from 'react';
import { SafeAreaView, Text, View, Dimensions, Animated } from 'react-native';

import styles from './Style';

function SplashAnimation()  {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1300,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 1300,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1300,
      toValue: 1,
      delay: 1300,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, {opacity: fadeAnim}]}
          source={require('../../../image/shopIcon.png')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoText]}>S</Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            ale App
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashAnimation;