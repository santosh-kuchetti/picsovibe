import {FlatList, Image, Text, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {TrendingHashTagsType} from '../../../types/Types';
import styles from '../../../styles/Global';

const CustomFlatlist = ({images, from}: TrendingHashTagsType) => {
  const memoizedImagesData = useMemo(() => images, [images]);
  const keyExtractor = useCallback((item, index) => `${item.id}_${index}`, []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={{marginRight: 15}}>
          <Image source={{uri: item.download_url}} style={styles.trendImage} />
          {from == 'Trending hashtags' && (
            <View style={styles.hashtagsContainer}>
              <Text style={styles.hashtags}>#adventure</Text>
              <Text style={styles.hashtags}>2.7m</Text>
            </View>
          )}
          {from == 'Top community' && (
            <>
              <View style={styles.communityTopContainer}>
                <Text style={styles.hashtags}>125posts/day</Text>
              </View>
              <View style={styles.communityBelowContainer}>
                <Text style={styles.communityHeadText}>Places of</Text>
                <Text style={styles.communityContentText}>France</Text>
              </View>
            </>
          )}
        </View>
      );
    },
    [memoizedImagesData],
  );
  return (
    <View>
      <FlatList
        data={memoizedImagesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEventThrottle={16}
        windowSize={10}
        initialNumToRender={20}
        removeClippedSubviews
      />
    </View>
  );
};

export default CustomFlatlist;
