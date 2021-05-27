import React from 'react'

import t, { getCurrentLanguage, setCurrentLanguage } from '../Localize'
import DropDownPicker from 'react-native-dropdown-picker';
import {
  View,
  StyleSheet,
  Alert, Platform, StatusBar, Text, TextInput, TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from "react-native-linear-gradient"

import axios from 'axios'
import { AddCarToUser } from '../Config/api/api'
import AsyncStorage from '@react-native-community/async-storage'

class AffecterCarScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      title:'',
      description:'',
      matricule: '',
      etat:'',
      userInfo: null,
      error: "",
      users:[],
      dataSource:[]
    };
  }

  componentDidMount() {
this.getUsers();
  }

  getUsers = () => {
    fetch("http://192.168.1.16:4000/api/users/users")  // **Api for fetching**
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
  }

  _onMatriculeChange = matricule => {
    this.setState({ matricule: matricule });
  };

  _onTitreChange = title => {
    this.setState({ title: title });
  };
  _onEtatChange = etat => {
    this.setState({ etat: etat });
  };
  _onDescriptionChange = description => {
    this.setState({ description: description });
  };


  _onViewCarsPress = () => {
    this.props.navigation.navigate('Root', { screen: 'ListCars' })
    console.log("touch");

  };

  _onConfirmPress = async () => {

    fetch('http://192.168.1.16:4000/api/voitures/addCar', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": this.state.title,
        "description": this.state.description,
        "matricule": this.state.matricule,
        "etat": this.state.etat,
        "type": "golf",
        "disponibilite":"Disponible"
      })

    });
    this._onViewCarsPress()
  };


/*
  _onConfirmPress =async () => {

    AddCarToUser ( { // if validation fails, value will be null

      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        matricule: this.state.matricule,
        etat: this.state.etat,


      })
    })
      .then((response) => response.json())
      .then((responseData) => {

        alert(
          "Signup Success!",
          "Click the button to get a Chuck Norris quote!"
        )
      })
      .done();
  };

*/



  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header}>  Ajouter Une Voiture</Text>
        </View>

          <Text style={[styles.text_footer, {

            marginTop: 35
          }]}>Titre</Text>
          <View style={styles.action}>
            <Feather
              name="lock"

              size={20}
            />
            <TextInput
              placeholder="Titre"
              placeholderTextColor="#666666"
              onChangeText={this._onTitreChange}
              style={[styles.textInput, {

              }]}
              autoCapitalize="none"

            />
            <TouchableOpacity

            >



            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {

            marginTop: 35
          }]}>Description</Text>
          <View style={styles.action}>
            <Feather
              name="lock"

              size={20}
            />
            <TextInput
              placeholder="Description"
              placeholderTextColor="#666666"
              onChangeText={this._onDescriptionChange}
              style={[styles.textInput, {

              }]}
              autoCapitalize="none"

            />

          </View>
          <Text style={[styles.text_footer, {

          }]}>
            Matricule</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"

              size={20}
            />
            <TextInput
              placeholder="Matricule"
              placeholderTextColor="#666666"
              onChangeText={this._onMatriculeChange}
              style={[styles.textInput, {

              }]}
              autoCapitalize="none"

            />


          </View>




          <Text style={[styles.text_footer, {

            marginTop: 35
          }]}>Etat</Text>
          <View style={styles.action}>
            <Feather
              name="lock"

              size={20}
            />
            <TextInput
              placeholder="Etat"
              placeholderTextColor="#666666"
              onChangeText={this._onEtatChange}
              style={[styles.textInput, {

              }]}
              autoCapitalize="none"

            />
            <TouchableOpacity

            >



            </TouchableOpacity>
          </View>
        <DropDownPicker
          placeholder="Ajouter Un Ouvrier"
          style={{
            alignItems: "center"
            , justifyContent: "center"
          }}
          items={this.state.dataSource.map(item=> ({label:item.fullname  + item.number,value:item.fullname + item.number}))}
          defaultValue={this.state.country}


          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => this.setState({
              country: item.value
            },
            console.log(item.value)
          )
          }
        />




          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={this._onConfirmPress}
              //
            >
              <LinearGradient
                colors={['#009299', '#009299']}
                style={styles.signIn}

              >
                <Text style={[styles.textSign, {
                  color:'#fff'
                }]}
                >
                  {t('login.login')}</Text>
              </LinearGradient>
            </TouchableOpacity>


          </View>

      </View>
    );
  }



}
export  default AffecterCarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 10
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
    color: '#009299',
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
    marginTop: 2,
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
