import React, {Component, useEffect, useState} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';

import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import Store from '../Redux/store';
import RootNavigator from './RootNavigator';
import HomeScreen from './HomeScreen';
import MainAppNavigator from './RootContainer';
import Splash from './Splash';
import LoginScreen from './LoginScreen';
import {DrawerContent} from './DrawerContent';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../Components/context';
const Drawer = createDrawerNavigator();
import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from '../Redux/actions/types';
import jwt_decode from 'jwt-decode';
import {clearErrors, setCurrentUser} from '../Redux/actions/authActions';
const App = () => {



    const [isloggedin,setLogged] = useState(null)

    const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
        if(token){
            setLogged(true)
        }else{
            setLogged(false)
        }
    }
    useEffect(()=>{
        detectLogin()
    },[])



















    function Root() {
        return (
            <MainAppNavigator />
        );
    }

    return (
    <Store>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Splash" component={Splash} />
                    <Drawer.Screen name="Root" component={Root}  />
                </Drawer.Navigator>
            </NavigationContainer>


    </Store>

    );
}

export default App;
