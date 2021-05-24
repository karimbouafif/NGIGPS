import React from 'react';
import {createAppContainer} from 'react-navigation';
import { connect } from 'react-redux';

import { createStackNavigator } from 'react-navigation-stack';


import styles from './Styles/NavigationStyles';

import Menu from './Menu';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Block} from 'galio-framework';

// screens
import Splash from '../Containers/Splash';

// drawer
import DrawerItem from '../Components/DrawerItem';

// header for screens
import Header from '../Components/Header';

import LaunchScreen from '../Containers/LaunchScreen';
import Home from '../Containers/HomeScreen';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: {screen: LaunchScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1],
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    const scaleWithOpacity = {opacity};
    const screenName = 'Search';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return {transform: [{translateX}]};
  },
});





const authStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      },
    },

  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE',
    },
    transitionConfig,
  },
);

const HomeStack = createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },

    },
    {
      cardStyle: {
        backgroundColor: '#F8F9FE',
      },
      transitionConfig,
    },
);


const AppStack = createDrawerNavigator(
    {
      Auth: {
        screen: authStack,
        navigationOptions: {
          drawerLabel: () => {
          },
        },
      },
      Home: {
        screen: HomeStack,
        navigationOptions: {
          drawerLabel: () => {
          },
        },
      },
    },

  Menu,
);

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(AppStack)
