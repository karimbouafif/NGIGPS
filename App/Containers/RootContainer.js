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
import FeedbackScreen from './FeedBackScreen'
import AboutScreen from './AboutScreen'
import CarScreen from './CarScreen'
import AffecterCarScreen from './AffecterCarScreen'
import ListCars from './ViewCarScreen'
import LogoutScreen from './LogoutScreen'
import ChatsScreen from './Chat/chatScreen'
import Broadcast from './Chat/Broadcast'
import Messages from './Chat/Messages'
import PeoplesScreen from './Chat/Peoples'
import CarDetails from './CarDetails'
import MissionScreen from './TaskManagementScreen'
import ViewTask from './ViewTaskScreen'
import TaskDetailsScreen from './TaskDetailsScreen'
import TaskMapsScreen from './ViewTaskInMpasScreen'
import AllCarsScreen from './AllCarsScreen'
import Card from  '../Components/Card'
import SingleCarDetailScreen from './SingleCarDetailScreen'
import CalenderTaskScreen from './CalenderTaskScreen'





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
      <Stack.Screen name={"FeedbackScreen"} component={FeedbackScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"AboutScreen"} component={AboutScreen}   options={{
        headerShown: false,
      }} />

      <Stack.Screen name={"CarScreen"} component={CarScreen}   options={{
        headerShown: false,
      }} />

      <Stack.Screen name={"AffecterCarScreen"} component={AffecterCarScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"ListCars"} component={ListCars}   options={{
        headerShown: false,
      }} />

      <Stack.Screen name={"LogoutScreen"} component={LogoutScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"ChatsScreen"} component={ChatsScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"Broadcast"} component={Broadcast}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"Messages"} component={Messages}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"PeoplesScreen"} component={PeoplesScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"CarDetails"} component={CarDetails}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"MissionScreen"} component={MissionScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"ViewTask"} component={ViewTask}   options={{
        headerShown: false,
      }} />

      <Stack.Screen name={"TaskDetailsScreen"} component={TaskDetailsScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"TaskMapsScreen"} component={TaskMapsScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"AllCarsScreen"} component={AllCarsScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"Card"} component={Card}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"SingleCarDetailScreen"} component={SingleCarDetailScreen}   options={{
        headerShown: false,
      }} />
      <Stack.Screen name={"CalenderTaskScreen"} component={CalenderTaskScreen}
       />


    </Stack.Navigator>

);

export default MainAppNavigator;
