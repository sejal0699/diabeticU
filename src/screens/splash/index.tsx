
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import styles from './styles';

const Splash = () => {
useEffect(() => {
  
    const timer = setTimeout(() => {

    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/splash.png')}style={styles.imageBackground}>
      <Image
        source={require('../../assets/images/splash_alterate.gif')}
        style={styles.image}
        resizeMode="contain"
      />
  
      </ImageBackground>
    </View>
  );
};



export default Splash;
