import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../../../styles/Global';
import {NodeImageType} from '../../../types/Types';

const NomadImage = ({url}: NodeImageType) => {
  return (
    <View style={styles.nomadImageContainer}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.nomadImage}
      />
      <Text style={styles.nomadTitle}>@PlayParker</Text>
      <Text style={styles.nomadFollowers}>200k followers</Text>
    </View>
  );
};

export default NomadImage;
