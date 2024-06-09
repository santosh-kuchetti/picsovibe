import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderType} from '../types/Types';
import styles from '../styles/Global';

const Header = ({name, from}: HeaderType) => {
  return (
    <View style={styles.mainheader}>
      <Text style={styles.header}>{name}</Text>
      {(from == 'Trending hashtags' ||
        from == 'Top community' ||
        from == 'nomads') && (
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeall}>See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
