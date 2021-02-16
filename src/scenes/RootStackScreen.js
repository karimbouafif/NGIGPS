import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './LoadingScreen';
import LoginScene from './LoginScene';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScene" component={LoginScene}/>

    </RootStack.Navigator>
);

export default RootStackScreen;
