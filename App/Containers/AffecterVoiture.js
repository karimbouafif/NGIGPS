import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import InputTextField from '../Components/InputTextField';
import Logo from '../Assets/images/Logo.png';

import AsyncStorage from '@react-native-community/async-storage';
import { Config } from '../Config/api'




const API_URL = Config.API_URL;


export default class AffecterVoiture extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }






















  _onLoginChange = email => {
    this.setState({ email: email });
  };

  _onPasswordChange = password => {
    this.setState({ password: password });
  };

  _onAddCarPress = () => {
    this.props.navigation.navigate('AjouterVoiture',{ item: this.state })


  };

  render() {
    return (
      <ScrollView style={styles.container}>



        <View>


          <View style={{ paddingHorizontal: 25 }}>


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




            <TouchableOpacity
              style={styles.submitContainer}
              onPress={this._onAddCarPress}
            >
              <View>
                <Text
                  style={[
                    styles.text,
                    { color: '#fff', fontWeight: '600', fontSize: 16 },
                  ]}
                >
                  Ajouter Voiture
                </Text>
              </View>
            </TouchableOpacity>
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
                  Affecter Voiture
                </Text>
              </View>
            </TouchableOpacity>
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
                  Liste Des Voitures
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
  logo: {
    width: 183,
    height: 40,
  },
});
