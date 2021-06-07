import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const GererMissionStack = createDrawerNavigator();
//import Users from '../model/users';
//import DetailsScreen from "./DetailsScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import * as AsyncStorage from 'react-native/Libraries/Storage/AsyncStorage';
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/actions/authActions'


export function DrawerContent(props) {
    const [data, setData] = React.useState({
        username: '',

    });
    const [email,setEmail] = useState(data.email)
    const Boiler = async ()=>{
        const token = await AsyncStorage.getItem("token")
        fetch('hhttp://192.168.1.16:4000/api',{
            headers:new Headers({
                Authorization:"Bearer "+token
            })
        }).then(res=>res.json())

            .then(data=>{

                    console.log(data)
                    setEmail(data.email)
                }
            )
    }
    useEffect(()=>{
        Boiler()
    },[])
    const paperTheme = useTheme();

  //  const { signOut, toggleTheme } = React.useContext(AuthContext);


    const   onSubmit = async () => {


        props.logoutUser();
        props.navigation.navigate('Root', { screen: 'LoginScene' })
    };



    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Karim Bouafif</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Acceuil"
                            onPress={() => props.navigation.navigate('Root', { screen: 'HomeScreen' })}
                        />

                        <Drawer.Section style={styles.bottomDrawerSection}>
                            <DrawerItem
                              icon={({color, size}) => (
                                <Icon
                                  name="calendar"
                                  color={color}
                                  size={size}
                                />
                              )}
                              label="Calendrier Personnel"
                              onPress={() => props.navigation.navigate('Root', { screen: 'CalenderScreen' })}
                            />
                        </Drawer.Section>

                        <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="google-maps"
                              color={color}
                              size={size}
                            />
                          )}

                          label="Affichage Instantanné Maps"

                          onPress={() => props.navigation.navigate('Root', { screen: 'FindMyWayScreen' })}
                        />

                    </Drawer.Section>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="car"
                              color={color}
                              size={size}
                            />
                          )}
                          label="Gestion des Voitures"
                          onPress={() => props.navigation.navigate('Root', { screen: 'CarScreen' })}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="account-settings"
                              color={color}
                              size={size}
                            />
                          )}
                          label="Paramètres"
                          onPress={() => props.navigation.navigate('Root', { screen: 'SettingsScreen' })}
                        />
                    </Drawer.Section>

                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="chat"
                              color={color}
                              size={size}
                            />
                          )}
                          label="Chat"
                          onPress={() => props.navigation.navigate('Root', { screen: 'ChatsScreen' })}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Se déconnecter"
                            onPress={() => props.navigation.navigate('Root', { screen: 'LogoutScreen' })}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>


        </View>
    );
}
const mapStateToProps = state => ({
    auth: state.auth,
    //errors: state.errors
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(DrawerContent);
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    notifications: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

