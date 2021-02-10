import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing, Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';
import Wallpaper from "../components/Wallpaper";
import Logo from "../components/Logo";
import Form from "../components/Form";
import SignupSection from "../components/SignupSection";
import ButtonSubmit from "../components/ButtonSubmit";

const SIZE = 40;

export default class HomeScene extends Component {
  render() {
    return (
       <View>
         <Text style={styles.logoText}>NGI GPS</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  logoText: {
    color: '#193566',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    marginTop: 29.1,
    fontWeight: '300',
  },
});
