import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LoadingScene from './src/scenes/LoadingScreen';
import LoginScene from './src/scenes/LoginScene';
import HomeScene from "./src/scenes/HomeScene";


class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="loading"
            component={LoadingScene}
            initial={true}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="login" component={LoginScene} hideNavBar={true} />

            <Scene key="homeScene"
                   component={HomeScene}
                   animation='fade'
                   hideNavBar={true}
            />
        </Stack>
      </Router>
    );
  }
}

export default App;
