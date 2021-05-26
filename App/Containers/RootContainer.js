import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Containers/HomeScreen';

import AddCalenderEvents from '../Containers/AddCalenderEvents';
import SplashScreen from './Splash';
import LoginScreen from './LoginScreen'
import CalenderScreen from './CalenderScreen';
import FindMyWayScreen from './FindMyWayStack';
import SettingsScreen from './SettingsScreen'
import LanguageScreen from './LanguageScreen'



const Stack = createStackNavigator();

const MainAppNavigator = ({navigation}) => (
    <Stack.Navigator headerMode="screen"  >
        <Stack.Screen name="Splash" component={SplashScreen} headerMode='none' />
        <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,}} />
        <Stack.Screen name="CalenderScreen" component={CalenderScreen} options={{ title: 'Calender' }} />

        <Stack.Screen name="AddCalenderEvents" component={AddCalenderEvents} options={{ title: 'Manage Your Event' }} />
        <Stack.Screen name={"LoginScreen"} component={LoginScreen}   options={{
                headerShown: false,
        }} />
            <Stack.Screen name={"FindMyWayScreen"} component={FindMyWayScreen}   options={{
                    headerShown: false,
            }} />
      <Stack.Screen name={"SettingsScreen"} component={SettingsScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"LanguageScreen"} component={LanguageScreen}   options={{
        headerShown: false,
      }} />

    </Stack.Navigator>
);

export default MainAppNavigator;
