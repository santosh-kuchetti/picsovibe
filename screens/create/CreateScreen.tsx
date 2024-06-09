import { Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/Global';
import LinearGradient from 'react-native-linear-gradient';

const CreateScreen = () => {
  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={[styles.searchContainer, styles.unUsedScreens]}>
      <Text>Create</Text>
    </LinearGradient>
  );
}

export default CreateScreen