import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Colors from '../res/Colors'
import Logo from '../Assets/images/Logo.png';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';







export default class Splash extends Component {

  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };



  render () {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../Assets/images/Logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />


        </View>
        <Animatable.View
          style={[styles.footer, {

          }]}
          animation="fadeInUpBig"
        >
          <Text style={[styles.title, {

          }]}>
            Restez connecté avec tout le monde!</Text>
          <Text style={styles.text}>
            Connectez-vous avec votre compte</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')}>
              <LinearGradient
                colors={['#009299', '#009299']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>
                  Commencer</Text>
                <MaterialIcons
                  name="navigate-next"
                  color="#fff"
                  size={20}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009299'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: 183,
    height: 40,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop:5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
});
