import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { VelibContext } from '../exercices/exercice-context'

export default function MapScreen() {


  const velib = useContext(VelibContext)
  console.log('velib', velib);

  if (!velib.velibs) {
    return (
      <Text> Please wait....</Text>
    )
  }

  const station = velib.velibs.records;

  return velib instanceof Object ? (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 48.8504659,
        longitude: 2.3497267,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
