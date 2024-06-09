import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../../styles/Global';

const TopImage = () => {
  return (
    <View style={styles.topImageView}>
      <Image
        source={{
          uri: 'https://fastly.picsum.photos/id/416/1280/853.jpg?hmac=B9Bc5K0QP3GbA6b2Dsfmjm_YpNCOlB_5zm6ZCXUnoHw',
        }}
        style={styles.topImage}
      />
      <Text style={styles.topImageText}>#Top search of the day</Text>
    </View>
  );
}

export default TopImage