import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { VelibContext } from '../exercices/exercice-context'

export default function MapScreen() {


  const velib = useContext(VelibContext)
  
  
  if (!velib.velibs) {
    return (
      <Text> Please wait....</Text>
    )
  }

  const station = velib.velibs.records;
  const localPos = velib.position;
  console.log("position : " , localPos)


  return velib instanceof Object ? (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: localPos.coords.latitude,
        longitude: localPos.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      showsUserLocation={true}
      followUserLocation={true}
      zoomEnabled={true}
    >
      {
        station.map(station => (
          <Marker
            key={station.recordid}
            coordinate={{
              latitude: station.geometry.coordinates[1],
              longitude: station.geometry.coordinates[0],
            }}
            title={station.station_name}
          />
        ))
      }
    </MapView>
  ) : <Text> Please wait....</Text>;
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
