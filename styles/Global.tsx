import {
  Dimensions,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Platform,
} from 'react-native';

const {width} = Dimensions.get('window');

type StyleType = ViewStyle | TextStyle | ImageStyle;

interface Styles extends Record<string, StyleType> {
  splashScreen: ViewStyle;
  logo: ImageStyle;
  textFieldWrapStyle: TextStyle;
  signin: TextStyle;
  signinButtonStyle: ViewStyle;
  loginLogoView: ViewStyle;
  userFields: ViewStyle;
  loginLogo: ImageStyle;
  topImage: ImageStyle;
  image: ImageStyle;
  trendImage: ImageStyle;
  nomadImage: ImageStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  //tabNaigation
  tabBarStyle: {
    backgroundColor: '#EEF1F5',
    paddingVertical: 5,
    borderTopWidth: 0,
    height: 50,
  },

  splashScreen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userFields: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  textFieldWrapStyle: {
    width: '80%',
    paddingTop: 8,
    borderColor: '#301E5B',
    borderWidth: 1,
    borderRadius: 5,
    color: '#301E5B',
    fontSize: 18,
    paddingLeft: 10,
  },
  signin: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signinButtonStyle: {
    backgroundColor: '#301E5B',
    height: 48,
    width: '80%',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#301E5B',
    borderWidth: 1.0,
    ...(Platform.OS === 'web' && {cursor: 'pointer'}),
  },
  errors: {
    width: '80%',
    color: 'red',
    textAlign: 'left',
    marginTop: 2,
  },
  loginLogoView: {
    width: '100%',
    top: '10%',
    alignItems: 'center',
  },
  loginLogo: {
    width: 150,
    height: 150,
  },

  //homeScreen
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topText: {
    position: 'absolute',
    top: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomview: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '80%',
  },
  extraimages: {
    position: 'absolute',
    bottom: '10%',
    right: 20,
    gap: 25,
  },
  bottomText: {
    fontSize: 14,
    color: 'white',
  },
  flatList: {
    flex: 1,
  },

  //searchScreen
  searchContainer: {
    flex: 1,
  },
  maincontainer: {
    marginLeft: 35,
    top: 50,
    flexDirection: 'column',
    gap: 40,
  },
  topcontainer: {
    marginRight: 35,
    flexDirection: 'column',
    gap: 40,
  },
  searchInput: {
    fontSize: 18,
    top: 8,
    backgroundColor: '#EBEBEB',
    height: 45,
    borderRadius: 5,
    paddingLeft: 20,
  },
  headerview: {
    gap: 20,
  },
  header: {
    color: '#597067',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeall: {
    color: '#597067',
    fontSize: 14,
  },
  mainheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  topImageView: {
    width: '100%',
    height: 200,
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  topImageText: {
    position: 'absolute',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    bottom: 10,
    left: 5,
  },
  trendImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  hashtagsContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  hashtags: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  communityBelowContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 5,
  },
  communityHeadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'medium',
  },
  communityContentText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  communityTopContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  nomadImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    marginBottom: 10,
  },
  nomadContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  nomadImageContainer: {
    alignItems: 'center',
  },
  nomadFollowers: {
    color: '597067',
    fontSize: 12,
    fontWeight: 'medium',
  },
  nomadTitle: {
    color: '597067',
    fontSize: 14,
    fontWeight: 'bold',
  },

  //skeleton
  skeletonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },

  // unused tabs
  unUsedScreens: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
