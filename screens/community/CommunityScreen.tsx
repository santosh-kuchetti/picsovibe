import { Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/Global'
import LinearGradient from 'react-native-linear-gradient';

const CommunityScreen = () => {
  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={[styles.searchContainer, styles.unUsedScreens]}>
      <Text>Community</Text>
    </LinearGradient>
  );
}

export default CommunityScreen