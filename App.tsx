import React, {useEffect} from 'react';
import {View} from 'react-native';
import Splash from './src/screens/splash';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Splash />;
};

export default App;
