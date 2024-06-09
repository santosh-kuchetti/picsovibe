import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import {ImagesType} from '../../types/Types';
import {getImages} from '../../api';
import styles from '../../styles/Global';
import SkeletonFlatlist from '../search/components/SkeletonFlatlist';

const TAB_NAVIGATOR_HEIGHT = 74;

const HomeScreen = () => {
  const [images, setImages] = useState<ImagesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const screenHeight = Dimensions.get('window').height - TAB_NAVIGATOR_HEIGHT;

  useEffect(() => {
    fetchImages();
  }, []);



  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await getImages();
      setImages(prevImages => [...prevImages, ...response.data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndReached = () => {
    fetchImages();
  };

  const renderItem = ({item, index}) => {
    const inputRange = [
      (index - 1) * screenHeight,
      index * screenHeight,
      (index + 1) * screenHeight,
    ];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    return isLoading ? (
      <SkeletonFlatlist from="home" />
    ) : (
      <Animated.View
        style={[styles.imageContainer, {height: screenHeight, opacity}]}>
        <Image source={{uri: item.download_url}} style={styles.image} />
        <Text style={styles.topText}>{item.author || 'LoremIpsum'}</Text>
        <View style={styles.bottomview}>
          <Text style={styles.bottomText}>Caption</Text>
          <Text style={styles.bottomText}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </Text>
        </View>
        <View style={styles.extraimages}>
          <Image source={require('../../assets/images/adduser.png')} />
          <Image source={require('../../assets/images/message.png')} />
          <Image source={require('../../assets/images/favourites.png')} />
          <Image source={require('../../assets/images/share.png')} />
          <Image source={require('../../assets/images/send.png')} />
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}_${index}`}
      pagingEnabled
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      contentContainerStyle={{height: screenHeight * images.length}}
      style={styles.flatList}
    />
  );
};

export default HomeScreen;
