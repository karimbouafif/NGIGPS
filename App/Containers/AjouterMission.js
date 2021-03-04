
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker
} from 'react-native';
import * as Animatable from 'react-native-animatable'



export default  class AjouterMission extends  Component<{}> {
  constructor(){
    super();
    this.state={
      PickerValue:''

    }

  };
  clickme=()=>{
    var data = this.state.PickerValue;
    if(data==""){
      alert("Please Select a Option");
    }else{
      alert(data);
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text_footer]}>
          Genre</Text>
        <View style={styles.action}>
        <Picker
          style={{width:'80%'}}
          selectedValue={this.state.PickerValue}
          onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
        >
          <Picker.Item label="Genre" value=""/>
          <Picker.Item label="Livraison" value="livraison" />
          <Picker.Item label="ramassage et livraison" value="ramassage et livraison"/>
        </Picker>

        </View>
        <Button title="Click me" onPress={this.clickme}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginRight:'50%'

  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
    paddingBottom: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
