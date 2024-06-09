import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styles from '../styles/Global';
import {NavigationTypes} from '../types/Types';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}: NavigationTypes) => {
  useEffect(() => {
    async function initializeApp() {
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000);
    }

    initializeApp();
  }, []);

  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={styles.searchContainer}>
      <View style={styles.splashScreen}>
        <Image source={require('../assets/images/orbitwalletlogo.png')} />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
