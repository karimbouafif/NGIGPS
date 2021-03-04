import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView, StatusBar, TextInput, Platform,
} from 'react-native'
import InputTextField from '../Components/InputTextField';
import Logo from '../Assets/images/Logo.png';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from "react-native-linear-gradient"



export default class Auth extends Component {



  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      userInfo: null,
      passwordVisible: false,
      username: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,

    };
  }



  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
      this.setState({
        check_textInputChange: !this.state.check_textInputChange,
        username: val,

        isValidUser: true
      });
    }
  }

  _togglePasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  _onLoginChange = login => {
    this.setState({ login: login });
  };

  _onPasswordChange = password => {
    this.setState({ password: password });
  };

  _onSigninPress = () => {
    this.props.navigation.navigate('Home',{ item: this.state })
    /*userLogin({
      number: this.state.login,
      password: this.state.password,
    })
      .then(rsp => {
        this.saveItem('jwt', rsp.data.token);
        this.props.navigation.navigate('Onboarding',{ item: this.state })



      })
      .catch(err => {
        console.log(err);
      });

     */
  };

  render() {
    return(
    <ScrollView style={styles.container}>


      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#009299',
            paddingBottom: 10,
          }}
        >
          <Image source={Logo} style={styles.logoContainer} />
          <Text
            style={[
              styles.text,
              { fontSize: 24, fontWeight: '300', color: '#fff' },
            ]}
          >

          </Text>
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >

          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                height: 0.1,
                width: 120,
                borderColor: '#595959',
                marginTop: 40,
              }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: '#595959',
                  fontSize: 18,
                  textAlign: 'center',
                  marginVertical: 25,
                  fontWeight: 'bold',
                },
              ]}
            >
             NGI GPS
            </Text>
            <View
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                height: 0.1,
                width: 120,
                borderColor: '#595959',
                marginTop: 40,
              }}
            />
          </View>

          <InputTextField
            placeholderText="Votre mail"
            _onTextChange={this._onLoginChange}
          />
          <InputTextField
            _onTextChange={this._onPasswordChange}
            style={{ marginTop: 20, marginBottom: 17 }}
            placeholderText=" Votre Mot de passe "
            isSecure={this.state.passwordVisible ? false : true}
            isVisible={this.state.passwordVisible ? true : false}
            _toggleVisibility={this._togglePasswordVisibility}
          />

          <Text style={[styles.text, styles.link, { textAlign: 'left' }]}>
           Mot de passe oublier ?
          </Text>

          <TouchableOpacity
            style={styles.submitContainer}
            onPress={this._onSigninPress}
          >
            <View>
              <Text
                style={[
                  styles.text,
                  { color: '#fff', fontWeight: '600', fontSize: 16 },
                ]}
              >
                Se Connecter
              </Text>
            </View>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: 24,
              },
            ]}
          >


          </Text>
        </View>
      </View>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'google_sans_bold',
    color: '#1D2029',
  },
  link: {
    color: '#009299',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#009299',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 17,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  logoContainer : {

    marginTop: 20,
    marginBottom: 15,
    width: 183,
    height: 40,

  }
});
