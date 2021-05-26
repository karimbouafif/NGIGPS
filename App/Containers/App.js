import React, {Component, useEffect, useState} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';

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
import { setI18nConfig } from '../Localize'
import * as RNLocalize from 'react-native-localize'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTranslationLoaded: false,
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
    }

    handleLocalizationChange = () => {
        setI18nConfig()
          .then(() => this.forceUpdate())
          .catch(error => {
              console.error(error)
          })
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
          <Store>
              <NavigationContainer>
                  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                      <Drawer.Screen name="Splash" component={Splash}/>
                      <Drawer.Screen name="Root" component={this.Root}/>
                  </Drawer.Navigator>
              </NavigationContainer>


          </Store>

        )
    }
}

