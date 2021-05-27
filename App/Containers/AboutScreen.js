import React from 'react'
import config from '../Config/index'
import styles from './Styles/index'
import t from '../Localize'
import HeaderButton from '../Components/HeaderButton'

import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'

import {
  Header
} from 'react-native-elements'

import LOGO_IMG from '../Assets/images/Logo.png'

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton text={ t('global.back') } icon={ 'ios7arrowleft' } onPressButton={ _ => { this.props.navigation.goBack() } }/>}
          centerComponent={{ text: t('global.about'), style: styles.modalHeader.center }}
          containerStyle={{
            backgroundColor: config.mainColor,
          }}
        />
        <View style={viewStyles.textContainer}>
          <View style={viewStyles.logoView}>
            <Image style={viewStyles.logo} source={LOGO_IMG} />
          </View>
          <View style={viewStyles.appNameView}>
            <Text style={viewStyles.appNameText}>NGI GPS</Text>
          </View>
          <View style={viewStyles.infoView}>
            <Text style={viewStyles.infoText}>GitHub: Karim.bouafif</Text>
            <Text style={viewStyles.infoText}>Twitter: @NGIGPS</Text>
            <Text style={viewStyles.infoText}>Email: contact@ngi.com</Text>
          </View>
          <View style={viewStyles.copyrightView}>
            <Text style={viewStyles.copyrightText}>Copyright © 2021 NGI GPS.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  },
  textContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 35
  },
  logoView: {
    width: 183,
    height: 40,
    borderColor: '#808080',
    backgroundColor: '#808080',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  },
  logo: {
    width: 183,
    height: 40,
    alignSelf: 'center'
  },
  appNameView: {
    marginTop: 15,
  },
  appNameText: {
    fontSize: 20,
    color: '#666'
  },
  infoView: {
    flexGrow: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  infoText: {
    marginTop: 10,
    color: '#666'
  },
  copyrightView: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0
  },
  copyrightText: {
    color: '#666',
    alignSelf: 'center'
  }
})
