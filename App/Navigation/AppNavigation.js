/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from "react";
import { createAppContainer } from 'react-navigation'
import Auth from '../Containers/Auth';
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

import Menu from "./Menu";
import {
  createDrawerNavigator,
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Splash from '../Containers/Splash';
import Onboarding from "../Containers/Onboarding";
import GererMesMissions from '../Containers/GererMesMissions'
import AjouterMission from '../Containers/AjouterMission'
import SingleMissionScreen from '../Containers/SingleMissionScreen'
import Logout from "../Containers/Logout";
// drawer
import DrawerItem from "../Components/DrawerItem";

// header for screens
import Header from "../Components/Header";
import Home from '../Containers/Home'





// Manifest of possible screens
const PrimaryNav = createStackNavigator({

  LaunchScreen: { screen: LaunchScreen },
  SingleEventScreen: { screen: SingleMissionScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});


const LogoutStack = createStackNavigator(
  {
    Logout: {
      screen: Logout,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Logout" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Acceuil" navigation={navigation} />
      })
    },

    SingleMissionScreen: {
      screen: SingleMissionScreen,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Mission unique " navigation={navigation} />
      })
    }


  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);




const authStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      }
    },
    Auth: {
      screen: Auth,
      navigationOptions: {
        headerShown: false,
      }
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const gerermissionStack = createStackNavigator(
  {
    GererMesMissions: {
      screen: GererMesMissions,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="GererMesMissions" navigation={navigation} />
      })
    },
    AjouterMission: {
      screen: AjouterMission,
      navigationOptions: ({ navigation }) => ({
        header: <Header   title="AjouterMission" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);



const AppStack = createDrawerNavigator(
  {
    Auth: {
      screen: authStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        )
      })
    },

    GererMesMissions: {
      screen: gerermissionStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="GererMesMissions" />
        )
      })
    },
    Logout: {
      screen: LogoutStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Logout" title="Logout" />
        )
      })
    },


  },
  Menu
);

export default createAppContainer(AppStack)
