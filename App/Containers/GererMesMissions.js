import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import LinearGradient from "react-native-linear-gradient"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const {width, height} = Dimensions.get('window');



export default class GererMesMissions extends Component{

  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }








  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#009299" />

        <View style={{flex:1,padding:5}}>
        </View>

        <Text>Les missions vont apparaitre ici </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AjouterMission')}>
            <LinearGradient
              colors={['#009299', '#009299']}
              style={styles.AddMission}
            >
              <MaterialIcons
                name="add-circle-outline"
                color="#fff"
                size={30}
              />
              <Text style={styles.textSign}>
                Ajouter</Text>

            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

    );

  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },


  status: {
    flex:1,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  AddMission: {
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
