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
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';
import { Config } from '../Config/api'
import Icon from 'react-native-vector-icons/Feather';

const API_URL = Config.API_URL;
const ACCESS_TOKEN = 'access_token';

export default class AjouterVoiture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userInfo: null,
      error: "",
      showProgress: false,
      passwordVisible: false,
      googleModalVisible: false,
      facebookModalVisible: false,
    };
  }





  componentDidMount() {

  }










  _onLoginChange = email => {
    this.setState({ email: email });
  };

  _onPasswordChange = password => {
    this.setState({ password: password });
  };



  render() {
    return (
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
                Affecter
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
              placeholderText="Matricule"
              _onTextChange={this._onLoginChange}
            />
            <InputTextField
              _onTextChange={this._onPasswordChange}
              style={{ marginTop: 20, marginBottom: 17 }}
              placeholderText="Type"

              _toggleVisibility={this._togglePasswordVisibility}
            />

            <InputTextField
              placeholderText="Etat"
              _onTextChange={this._onLoginChange}
            />

            <DropDownPicker
              items={[
                {label: 'Karim - 21322124', value: 'Karim', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                {label: 'zied -22826556', value: 'zied -22826556', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'Karim - 21322124', value: 'karim', icon: () => <Icon name="flag" size={18} color="#900" />},
              ]}
              defaultValue={this.state.country}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => this.setState({
                country: item.value
              })}
            />
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
                 Confirmer
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
