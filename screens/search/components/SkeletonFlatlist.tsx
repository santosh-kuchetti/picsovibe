import {FlatList,View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from '../../../styles/Global';
import { SkeletonType } from '../../../types/Types';

const SkeletonFlatlist = ({from}:SkeletonType) => {
  const renderItem = ({item}) => {
    return (
      <SkeletonPlaceholder borderRadius={10}>
        <SkeletonPlaceholder.Item
          width={from == 'trend' ? 150 : '100%'}
          height={from == 'trend' ? 150 : '100%'}
          borderRadius={10}
          marginRight={15}
        />
      </SkeletonPlaceholder>
    );
  };
  return (
    <View style={styles.skeletonContainer}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        horizontal={from == 'trend' ? true : false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SkeletonFlatlist;
