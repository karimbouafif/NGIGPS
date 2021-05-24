import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import MainAppNavigator from './RootContainer';
import {DrawerContent} from './DrawerContent';
import HomeScreen from './HomeScreen';


const RootNavigator = () => {
    return (
        <NavigationContainer>




            <MainAppNavigator/>
        </NavigationContainer>

    );
}
export default RootNavigator;
