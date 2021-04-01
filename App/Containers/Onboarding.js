import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import jwtDecode  from 'jwt-decode';
const { height, width } = Dimensions.get("screen");
import AsyncStorage from '@react-native-community/async-storage';
import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

const ACCESS_TOKEN = 'access_token';
class Onboarding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      accessToken: "",
    }
  }



  componentDidMount() {
    this.getMyObject();
    //AsyncStorage.getItem('jwt').then((accessToken) => {
    //const user = jwtDecode(accessToken).user;
    //console.log(user);

   // });
  }
  getMyObject = async () => {
    try {
      const value = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (value !== null) {
        // We have data!!
        console.log("value");
        console.log(value);
        const user = jwtDecode(value);
        this.setState({
          name: user.fullname,
        });
        console.log(user.fullname);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async getToken(responseData) {
    try {
      let userData = await AsyncStorage.getItem(ACCESS_TOKEN);
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  /*
  async getToken(responseData) {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log(ACCESS_TOKEN);
      if(!accessToken) {
        this.props.navigation.navigate('auth',{ item: this.state })
      } else {
        this.setState({accessToken: accessToken})
      }
    } catch(error) {
      console.log("Something went wrong");
      this.props.navigation.navigate('auth',{ item: this.state })
    }
  }
*/
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
              <Block>
                <Text color="white" size={32}>
                  Welcome
                </Text>
              </Block>
              <Block>
                <Text color="white" size={48}>
                  {this.state.name}
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color="white" size={16}>
                  We are happy to see you again
                </Text>
              </Block>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("Home")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Continue to the application
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'absolute',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
