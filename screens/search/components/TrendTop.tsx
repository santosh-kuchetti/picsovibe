import {View} from 'react-native';
import React from 'react';
import styles from '../../../styles/Global';
import Header from '../../../components/Header';
import {TrendingHashTagsType} from '../../../types/Types';
import CustomFlatlist from './CustomFlatlist';
import SkeletonFlatlist from './SkeletonFlatlist';

const TrendTop = ({images, from, loading}: TrendingHashTagsType) => {
  return (
    <View style={{marginTop: -15}}>
      <View style={styles.headerview}>
        <Header name={from} from={from} />
        {loading ? (
          <SkeletonFlatlist from='trend'/>
        ) : (
          <CustomFlatlist images={images} from={from} />
        )}
      </View>
    </View>
  );
};

export default TrendTop;
