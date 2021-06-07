import React, {Component, useEffect, useState} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../Redux/store';
import MainAppNavigator from './RootContainer';
import Splash from './Splash';

import {DrawerContent} from './DrawerContent';
import {setCurrentUser, logoutUser} from "../Redux/actions/authActions";
const Drawer = createDrawerNavigator();
import { setI18nConfig } from '../Localize'
import * as RNLocalize from 'react-native-localize'

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.1.16:4000/api";
import  { memo, createContext, useReducer } from 'react';

import { GlobalReducer, GLOBAL_INITIAL_STATE } from '../Redux/reducers/calenderReducer';
import GlobalProvider from '../Redux/reducers/GlobalState'





export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTranslationLoaded: false,
            response : null,
            setResponse : null,
        }
        setI18nConfig()
          .then(() => {
              this.setState({ isTranslationLoaded: true })
              RNLocalize.addEventListener('change', this.handleLocalizationChange)
          })
          .catch(error => {
              console.error(error)
          })
    }

    componentWillUnmount() {
        RNLocalize.removeEventListener('change', this.handleLocalizationChange)
        this.SessionAlive()
    }

    handleLocalizationChange = () => {
        setI18nConfig()
          .then(() => this.forceUpdate())
          .catch(error => {
              console.error(error)
          })
    }

SessionAlive = ()=> {

    if (AsyncStorage.token) {
        const decoded = jwt_decode(AsyncStorage.token);
        // Set user and isAuthenticated
        store.dispatch(setCurrentUser(decoded));
        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            // Logout user
            store.dispatch(logoutUser());
            // Redirect to login
            this.props.navigation.navigate('Root', { screen: 'LoginScene' })
        }
    }
}



    Root = () => {
        return (
          <MainAppNavigator/>
        );
    }

    render () {
        if (!this.state.isTranslationLoaded) {
            return <SafeAreaView />

        }
        return (

          <Provider store={store}>
              <GlobalProvider>
            <PersistGate persistor={persistor}>
              <NavigationContainer>
                  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                      <Drawer.Screen name="Splash" component={Splash}/>
                      <Drawer.Screen name="Root" component={this.Root}/>
                  </Drawer.Navigator>
              </NavigationContainer>


            </PersistGate>
              </GlobalProvider>
          </Provider>

        )
    }
}

