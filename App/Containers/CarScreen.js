import React from 'react'

import t, { getCurrentLanguage, setCurrentLanguage } from '../Localize'

import HeaderButton from '../Components/HeaderButton'
import ListTitle from '../Components/ListTitle'
import { Theme } from '../constants';
import {
  View,
  StyleSheet,
  Alert, Platform, StatusBar, Text, TextInput, TouchableOpacity, Image
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from "react-native-linear-gradient"
import { useTheme } from 'react-native-paper'
import { COLORS, FONTS, SIZES, icons, images } from '../Containers/constants';


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










          <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
            <View style={{
              flex: 1,
              backgroundColor: COLORS.lightGray
            }}>
              <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>Affecter Voiture</Text>

                <View style={{ flexDirection: 'row', height: '60%' }}>
                  {/* Friends */}
                  <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>

                  </View>

                  {/* Add Friend */}
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Ajouter</Text>
                    <TouchableOpacity
                      style={{
                        marginLeft: SIZES.base,
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.gray
                      }}
                      onPress={this._onAffecterCarPress}
                    >
                      <Image
                        source={icons.plus}
                        resizeMode="contain"
                        style={{
                          width: 20,
                          height: 20
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>


          <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
            <View style={{
              flex: 1,
              backgroundColor: COLORS.lightGray
            }}>
              <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>Afficher Voiture</Text>

                <View style={{ flexDirection: 'row', height: '60%' }}>
                  {/* Friends */}
                  <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>

                  </View>

                  {/* Add Friend */}
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Afficher</Text>
                    <TouchableOpacity
                      style={{
                        marginLeft: SIZES.base,
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.gray
                      }}
                      onPress={this._onViewCarsPress}
                    >
                      <Image
                        source={icons.List}
                        resizeMode="contain"
                        style={{
                          width: 20,
                          height: 20
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
  spacebetween: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
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
