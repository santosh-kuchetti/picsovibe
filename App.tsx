import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import SearchScreen from './screens/search/SearchScreen';
import CreateScreen from './screens/create/CreateScreen';
import CommunityScreen from './screens/community/CommunityScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, LogBox, StyleSheet, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import styles from './styles/Global';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarLabel: ({focused}) => (
        <Text style={{color: focused ? '#0A0A0A' : 'gray'}}>{route.name}</Text>
      ),
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = require('./assets/images/home.png');
            break;
          case 'Search':
            iconName = require('./assets/images/search.png');
            break;
          case 'Create':
            iconName = require('./assets/images/create.png');
            break;
          case 'Community':
            iconName = require('./assets/images/community.png');
            break;
          case 'Profile':
            iconName = require('./assets/images/profile.png');
            break;
          default:
            iconName = require('./assets/images/home.png');
        }

        return (
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#0A0A0A' : '',
            }}
            source={iconName}
          />
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
LogBox.ignoreAllLogs();

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast />
  </>
);

export default App;
