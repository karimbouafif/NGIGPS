
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Modal,
  Alert,
  View, Button, TouchableOpacity, TextInput, Dimensions, SafeAreaView, Pressable,
} from 'react-native'
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider, Input } from 'react-native-elements'
import XDate from 'xdate';
import InputTextField from '../Components/InputTextField'
const { width } = Dimensions.get("window");
import * as Nominatim from 'nominatim-browser';
import axios from 'axios'
const API_URL = Config.API_URL;
import { Config } from '../Config/api'
import * as QueryString from 'querystringify'
import jwtDecode from 'jwt-decode'



export default  class AjouterMission extends  Component<{}> {


  state = {
//DateTimePicker
    StartingDateTimeValue: null,
    ToDateValue: null,
    ToTimeValue: null,
    isStartingDateTimePickerVisible: false,
    isToDatePickerVisible: false,
    isToTimePickerVisible: false,
    dateOrTimeValue: null,
    datePickerVisible: false,
    timePickerVisible: false,
//Modal
    modalVisible: false,
//TextInputField
    nom: '',
    tel:'',
    note:'',
//ComboBox
    PickerValue:'',
    data: [],
    error: null,
  };

  clickme=()=>{
    var data = this.state.PickerValue;
    if(data==""){
      alert("Please Select a Option");
    }else{
      alert(data);
    }

  }



  setModalVisible = (visible) => {

    this.setState({ modalVisible: visible });
  }

  _onNomChange = nom => {
  //  console.log("nom: -value ",nom);
    this.setState({ nom: nom });
  };
  _onTelChange = tel => {
    this.setState({ tel: tel });
  };

  _onNoteChange = note => {
    this.setState({ note: note });
  };





  saveStartingDateTime = (value) => {
    console.log("saveStartingDateTime - value:", value);
    this.setState({
      StartingDateTimeValue: value,
    });
  };

  saveEndingDate = (value) => {
    console.log("saveEndingDate - value:", value);
    this.setState({
      ToDateValue: value,
    });
  };

  saveEndingTime = (value) => {
    console.log("saveEndingTime - value:", value);
    this.setState({
      ToTimeValue: value,
    });
  };

  fRenderDateTimePicker = (dateTimePickerVisible, visibilityVariableName, dateTimePickerMode, defaultValue, saveValueFunctionName ) => {


    return (
      <View>
        {}
        {Platform.OS === 'ios' && dateTimePickerVisible &&
        (<DateTimePicker
          mode={dateTimePickerMode}
          value={defaultValue}

          onChange={ (event, value) => {
            this.setState({
              dateOrTimeValue: value,


              [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
            });

            if (event.type === "set") {
              saveValueFunctionName(value);

            }

          }}
        />)}

        {}
        {}
        {Platform.OS === 'android' && dateTimePickerVisible && this.state.datePickerVisible &&
        (<DateTimePicker
          mode={"date"}
          display='default' // 'default', 'spinner', 'calendar', 'clock' // Android Only
          value={defaultValue}

          onChange={ (event, value) => {
            this.setState({

              dateOrTimeValue: value,
              datePickerVisible: false,
            });


            if (event.type === "set" && dateTimePickerMode === "datetime") {
              this.setState({
                timePickerVisible: true,
              });
            }

            else if (event.type === "set" && dateTimePickerMode === "date") {
              // console.log("saveValueFunctionName: ", saveValueFunctionName);
              this.setState({
                [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
              });

              saveValueFunctionName(value);

            }

          }}
        />)}

        {}
        {}
        {Platform.OS === 'android' && dateTimePickerVisible && this.state.timePickerVisible &&
        (<DateTimePicker

          mode={"time"}
          display='spinner' // 'default', 'spinner', 'calendar', 'clock' // Android Only
          is24Hour={false} // Android Only
          value={defaultValue}

          onChange={(event, value) => {
            // 1. In case of (mode == "time"), (value) is assigned to (newDateTime), which will be used below (as is with no additions)
            let newDateTime = value;

            // 2. In case of (mode == "datetime"),
            if (event.type === "set" && dateTimePickerMode === "datetime") {

              // 2.1. Get the (date) part from the previously displayed DATE picker, which saved its value into (this.state.dateValue)
              newDateTime = this.state.dateOrTimeValue;

              // 2.2. Get the (hours & minutes) parts from this TIME Picker, which saved its value into (value)
              const newHours = value.getHours();
              const newMinutes = value.getMinutes();

              // 2.3 Combine 2.1 & 2.2 (above) into (newDateTime).
              newDateTime.setHours(newHours);
              newDateTime.setMinutes(newMinutes);
              newDateTime.setSeconds(0);
            }

            this.setState({
              dateOrTimeValue: newDateTime,
              datePickerVisible: false,
              timePickerVisible: false,

              // We are done. Hide the <DatTimePicker>
              // Technically speaking, since this part of the script is only relevant to a certain platform, I don't need to check for the platform (below).
              [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
            });

            if (event.type === "set") {
              saveValueFunctionName(newDateTime);
              // console.log("visibilityVariableName:", [visibilityVariableName], " - newDateTime:", newDateTime);
            }
          }}

        />)}
      </View>
    );
  };


  fFormatDateTime = (date1, format1 = "datetime") => {
    // date1:   the date to be formatted
    // format1: the date mode - "datetime" , "date" OR "time"
    if (date1 === null) {
      return null;
    }

    // else:
    const format2 = format1.toLowerCase();
    let dateFormatted;
    const date2 = new XDate(date1);

    switch (format2) {
      case "datetime": {
        dateFormatted = date2.toString('dd/MM/yyyy - hh:mm TT');
        return dateFormatted;
      }
      case "date": {
        dateFormatted = date2.toString('dd/MM/yyyy');
        return dateFormatted;
      }
      case "time": {
        dateFormatted = date2.toString('hh:mm TT');
        return dateFormatted;
      }
      default:
        return null;
    }
  };


  fRenderDatePicker = (mode, visibilityVariableName) => {
    // mode:                        specifies the mode of the <DateTimePicker>
    // visibilityVariableName:  the name of the state variable, which controls showing/hiding this DateTimePicker.
    switch (mode) {
      case "datetime":
        return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
      case "date":
        return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
      case "time":
        return this.setState({ [visibilityVariableName]: true, datePickerVisible: false, timePickerVisible: true });
    }
  }

  render() {
    //Modal
    const { modalVisible } = this.state;


    //DateTimePicker
    let defaultShiftStartDateTime = new Date();
    defaultShiftStartDateTime.setDate(defaultShiftStartDateTime.getDate() + 1);
    defaultShiftStartDateTime.setHours(9);
    defaultShiftStartDateTime.setMinutes(0);
    defaultShiftStartDateTime.setSeconds(0);


    let defaultShiftEndDateTime = new Date();
    defaultShiftEndDateTime.setDate(defaultShiftEndDateTime.getDate() + 1);
    defaultShiftEndDateTime.setHours(17);
    defaultShiftEndDateTime.setMinutes(0);
    defaultShiftEndDateTime.setSeconds(0);

    return (
      <View style={styles.container}>
        <Picker
          style={{width:'100%'}}
          selectedValue={this.state.PickerValue}
          onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
        >
          <Picker.Item label="Choisir un status" value=""/>
          <Picker.Item label="high " value="high" />
          <Picker.Item label="Medium" value="medium"/>
          <Picker.Item label="Low" value="low"/>
        </Picker>
        <TouchableOpacity
          // THE FOLLOWING ARGUMENT VALUE IS THE (1st place OF 2) PLACES, WHICH DIFFERENTIATE BETWEEN THE DIFFERENT MODES (DATETIME, DATE & TIME)
          onPress={() => {
            // this.setState({ isStartingDateTimePickerVisible: true, });
            this.fRenderDatePicker("datetime", "isStartingDateTimePickerVisible");
          }}>
          <Input

            label='Début du mission'
            placeholder={"04/03/2021 - 09:00 AM"}
            editable={false}
            value={this.fFormatDateTime(this.state.StartingDateTimeValue)}
          />
        </TouchableOpacity>

        {// This function would render the necessary DateTimePicker only if the relevant state variable is set (above)
          this.fRenderDateTimePicker(
            this.state.isStartingDateTimePickerVisible,
            "isStartingDateTimePickerVisible",

            // THE FOLLOWING ARGUMENT VALUE IS THE (2nd place OF 2) PLACES, WHICH DIFFERENTIATE BETWEEN THE DIFFERENT MODES (DATETIME, DATE & TIME)
            "datetime",

            defaultShiftStartDateTime,

            // This is my function, which saves the selected value to my app's state.
            // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP.
            this.saveStartingDateTime,
          )}


        <TouchableOpacity
          onPress={() => {
            // this.setState({ isToDatePickerVisible: true, });
            this.fRenderDatePicker("date", "isToDatePickerVisible");
          }}>
          <Input
            label='Fin Mission'
            placeholder={"04/03/2021"}
            editable={false}
            value={this.fFormatDateTime(this.state.ToDateValue, "date")}
          />
        </TouchableOpacity>
        {this.fRenderDateTimePicker(
          this.state.isToDatePickerVisible,
          "isToDatePickerVisible",
          "date",
          defaultShiftEndDateTime,


          this.saveEndingDate,
        )}

        <TouchableOpacity
          onPress={() => {

            this.fRenderDatePicker("time", "isToTimePickerVisible");
          }}>
          <Input
            label='Fin Temps'
            placeholder={"09:00 AM"}
            editable={false}
            value={this.fFormatDateTime(this.state.ToTimeValue, "time")}
          />
        </TouchableOpacity>
        {this.fRenderDateTimePicker(
          this.state.isToTimePickerVisible,
          "isToTimePickerVisible",
          "time",
          defaultShiftEndDateTime,


          this.saveEndingTime,
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Contact</Text>
              <View style={styles.textFieldSpace}  >

                <InputTextField
                placeholderText="Nom"
                _onTextChange={this._onNomChange}
         />

              <InputTextField
                placeholderText="Télphone"
                _onTextChange={this._onTelChange}
              />
                <InputTextField
                  placeholderText="Note"
                  _onTextChange={this._onNoteChange}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >


                <Text style={styles.textStyle}>Sauvgarder</Text>

              </Pressable>

            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Contact</Text>
        </Pressable>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#009299",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
textFieldSpace:{

 justifyContent: 'space-between',
  marginTop: 40,
}


});
