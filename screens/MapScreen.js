import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

import {getLocationAsync} from '../exercices/exercice6-geo'


export default function MapScreen({navigation}) {

  const  params  = navigation.getParam('detailsStationData'); 
  // const name = params.station_name;
  // const latitude = params.geo[0];
  // const longitude = params.geo[1];

  const [myLocat, setMyLocat] = useState([]);

  useEffect(() => {
    getLocationAsync().then(data =>{
    setMyLocat(data)
  })
},[])
//console.log (myLocat)
  return (
    <MapView
    style={styles.container}
    initialRegion={{
      latitude: 48.8504659, 
      longitude: 2.3497267,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    showsUserLocation = {true}
    followUserLocation = {true}
    zoomEnabled = {true}
  />
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
