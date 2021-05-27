import React from 'react'

import t, { getCurrentLanguage, setCurrentLanguage } from '../Localize'

import HeaderButton from '../Components/HeaderButton'
import ListTitle from '../Components/ListTitle'

import {
  View,
  StyleSheet,
  Alert, Platform, StatusBar, Text, TextInput, TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from "react-native-linear-gradient"
import { useTheme } from 'react-native-paper'



 class CarScreen extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {

  }

   _onAffecterCarPress = () => {
     this.props.navigation.navigate('Root', { screen: 'AffecterCarScreen' })
     console.log("touch");

   };

   _onViewCarsPress = () => {
     this.props.navigation.navigate('Root', { screen: 'ListCars' })
     console.log("touch");

   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header}> Gestion des Voitures</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, {

          }]}
        >










          <View style={styles.button} >

            <TouchableOpacity
              style={styles.signIn}
              onPress={this._onAffecterCarPress}
              >
              <LinearGradient
                colors={['#009299', '#009299']}
                style={styles.signIn}

              >
                <Text style={[styles.textSign, {
                  color:'#fff'
                }]}
                >
                  <FontAwesome
                    name="address-card-o"

                    size={20}
                  />
                 Affecter Voiture</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.action}>

            <TouchableOpacity
              style={styles.signIn}
              onPress={this._onViewCarsPress}
            >
              <LinearGradient
                colors={['#009299', '#009299']}
                style={styles.signIn}

              >
                <Text style={[styles.textSign, {
                  color:'#fff'
                }]}
                >
                  <FontAwesome
                    name="list"

                    size={20}
                  />
                  Afficher Voiture</Text>
              </LinearGradient>
            </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }



}
export  default CarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009299'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
