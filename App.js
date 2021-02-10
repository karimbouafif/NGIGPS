import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import LoadingScene from './src/scenes/LoadingScreen';
import LoginScene from './src/scenes/LoginScene';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="loading"
            component={LoadingScene}
            initial={true}
            hideNavBar={true}
          />
          <Scene key="login" component={LoginScene} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}

export default App;
