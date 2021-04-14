
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const ACCESS_TOKEN = 'access_token';
export default class MyComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggenIn: "",
      showProgress: false,
      accessToken: "",
    }
  }
  componentDidMount() {
    this.deleteToken();
    this.props.navigation.navigate('Auth',{ item: this.state })
  }

  async deleteToken() {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN)
      console.log("Token Deleted");
      this.props.navigation.navigate('Auth',{ item: this.state })
    } catch(error) {
      console.log("Something went wrong");
    }
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
