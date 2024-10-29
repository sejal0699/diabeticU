import React, {useEffect} from 'react';
import {View, Image, StyleSheet, ImageBackground, Text} from 'react-native';
import styles from './styles';
import {Images} from '../../assets';

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.splashImage}
        style={styles.imageBackground}>
        <Image source={require('../../assets/images/splash_alterate.gif')} style={styles.image} />
      </ImageBackground>
    </View>
  );
};

export default Splash;
