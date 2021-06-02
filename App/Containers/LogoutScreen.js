import React, { Component } from 'react';
import {connect} from "react-redux";
import { logoutUser } from "../Redux/actions/authActions";
import { View,StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';





class LogoutScreen extends Component {
  componentDidMount() {
    this.removeItem();

  }

   removeItem =() => {
    this.props.logoutUser();
    this.props.navigation.navigate('Root', { screen: 'LoginScene' })
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(LogoutScreen);
