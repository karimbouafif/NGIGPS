import React from 'react'
import config from '../Config/index'
import styles from './Styles/index'
import t, { getCurrentLanguage, setCurrentLanguage } from '../Localize'

import HeaderButton from '../Components/HeaderButton'
import ListTitle from '../Components/ListTitle'

import {
  View,
  StyleSheet,
  Alert
} from 'react-native'

import {
  Header,
  ListItem,
  CheckBox
} from 'react-native-elements'

export default class LanguageScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      lang: 'en'
    }
  }

  componentDidMount() {
    getCurrentLanguage().then(langConfig => {
      this.setState({
        lang: langConfig.languageTag
      })
    })
  }

  render() {
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton text={ t('global.back') } icon={ 'ios7arrowleft' } onPressButton={ _ => { this.props.navigation.goBack() } }/>}
          centerComponent={{ text: t('settings.language'), style: styles.modalHeader.center }}
          containerStyle={{
            backgroundColor: config.mainColor,
          }}
        />
        <ListTitle title={t('settings.language').toUpperCase()}/>
        <ListItem
          topDivider
          bottomDivider
          title={'English'}
          checkBox={{
            checked: this.state.lang === 'en',
            checkedIcon: 'dot-circle-o',
            uncheckedIcon: 'circle-o',
            checkedColor: config.mainColor,
            onIconPress: () => { this.updateLanguage('en') }
          }}
          onPress={() => { this.updateLanguage('en') }}
        />
        <ListItem
          bottomDivider
          title={'Français'}
          checkBox={{
            checked: this.state.lang === 'fr',
            checkedIcon: 'dot-circle-o',
            uncheckedIcon: 'circle-o',
            checkedColor: config.mainColor,
            onIconPress: () => { this.updateLanguage('fr') }
          }}
          onPress={() => { this.updateLanguage('fr') }}
        />
      </View>
    )
  }

  updateLanguage(lang) {
    this.setState({
      lang,
      setCurrentLanguage

    })
    setCurrentLanguage(lang)
    Alert.alert(t('settings.needRestartTip'))
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  },
})
