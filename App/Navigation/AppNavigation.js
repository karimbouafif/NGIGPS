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
import ModalDatePickerScreen from '../Containers/ModalDatePickerScreen'
import SingleMissionScreen from '../Containers/SingleMissionScreen'
import MissionNgiReservationModal from '../Containers/MissionNgiReservationModal'
import Calendar from '../Containers/Calendrier'
import AffecterVoiture from'../Containers/AffecterVoiture'

import ViewMap from '../Containers/ViewMap'
import Pro from "../Containers/Pro";
import Logout from "../Containers/Logout";
// drawer
import DrawerItem from "../Components/DrawerItem";

// header for screens
import Header from "../Components/Header";
import Home from '../Containers/Home'
import FindMyWayStack from '../Containers/FindMyWayStack'





// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MissionNgiReservationModal: { screen: MissionNgiReservationModal },
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
const VoitureStack = createStackNavigator(
  {
    AffecterVoiture: {
      screen: AffecterVoiture,
      navigationOptions: ({ navigation }) => ({
        header: <Header   title="AffecterVoiture" navigation={navigation} />
      })
    },
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

    Calendar: {
      screen: Calendar,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="Calendrier" navigation={navigation} />
        ),
      })
    },
    Pro: {
      screen: Pro,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
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

const MapStack = createStackNavigator({
  MissionNgiReservationModal: {
    screen: MissionNgiReservationModal,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header left={<Block />} white  title="MissionNgiReservationModal" navigation={navigation} />
      ),
    })
  },
 Pro: {
    screen: Pro,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header left={<Block />} white transparent title="" navigation={navigation} />
      ),
      headerTransparent: true
    })
  }



},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

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
    Voiture: {
      screen: VoitureStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="AffecterVoiture" title="Affecter Une Voiture" />
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
    FindMyWayStack: {
      screen: FindMyWayStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="FindMyWayScreen" title="Navigation" />
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
