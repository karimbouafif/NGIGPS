import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ShareBikeMapBoxStyle'
import MapboxGL from "@react-native-mapbox-gl/maps";
import Logger from '@react-native-mapbox-gl/maps/javascript/utils/Logger';
import  MapView  from './MapBox/MapView';
MapboxGL.setAccessToken("pk.eyJ1Ijoia2FyaW1lc3ByaXQiLCJhIjoiY2szYm1vaWNjMG5qdjNvcXR6ZmI0eWE2OCJ9.Zcpnxn-I0W6JjZWdzIl2bg");
const api_key="pk.eyJ1Ijoia2FyaW1lc3ByaXQiLCJhIjoiY2szYm1vaWNjMG5qdjNvcXR6ZmI0eWE2OCJ9.Zcpnxn-I0W6JjZWdzIl2bg"
export default class ShareBikeMapBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startingPoint: this.props.startingPoint,
      endingPoint: this.props.endingPoint,
    };
    this.arrayholder = [];
  }
  changePoint = (latitude,longitude)=>{
    console.log(latitude+0);
    console.log(longitude+0);
    var latitudeF = parseFloat(latitude)
    var longitudeF = parseFloat(longitude)
    this.mapRef.changePoints(latitudeF,longitudeF);
  };
  moveCamera = () => {
    this.mapRef.moveCamera();
  }

  componentDidMount() {
    this.moveCamera();
  }

  render () {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapView
            mapBoxApiKey={api_key}
            navigationMode="Course" // Or "Global"
            ref={instance => this.mapRef = instance}
            startingPoint={this.state.startingPoint}
            endingPoint={this.state.endingPoint}
            color="green"
          />
        </View>
      </View>
    )
  }
}
