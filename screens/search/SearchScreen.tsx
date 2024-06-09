import {ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/Global';
import Search from './components/Search';
import TopImage from './components/TopImage';
import {ImagesType} from '../../types/Types';
import {getImages} from '../../api';
import Toast from 'react-native-toast-message';
import TrendTop from './components/TrendTop';
import TopNomad from './components/TopNomad';

const SearchScreen = () => {
  const [imagesData, setImagesData] = useState<ImagesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const fetchImages = async () => {
        setIsLoading(true);
        try {
          const response = await getImages();
          setImagesData(prevImages => [...prevImages, ...response.data]);
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Error in fetching images',
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchImages();
    }, []),
  );

  return (
    <LinearGradient
      colors={['#C1D3F2', '#FFFFFF']}
      style={styles.searchContainer}>
      <ScrollView
        contentContainerStyle={{
          marginLeft: 35,
          top: 50,
          flexDirection: 'column',
          gap: 40,
        }}
        showsVerticalScrollIndicator={true}>
        <View style={styles.topcontainer}>
          <Search />
          <TopImage />
        </View>
        <TrendTop
          images={imagesData}
          from="Trending hashtags"
          loading={isLoading}
        />
        <TrendTop
          images={imagesData}
          from="Top community"
          loading={isLoading}
        />
        <TopNomad />
      </ScrollView>
    </LinearGradient>
  );
};

export default SearchScreen;
