import { Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/Global';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={[styles.searchContainer,styles.unUsedScreens]}>
      <Text>Profile</Text>
    </LinearGradient>
  );
}

export default ProfileScreen