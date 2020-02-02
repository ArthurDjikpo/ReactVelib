import React, { useContext } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { VelibContext } from '../exercices/exercice-context'

export default function MapScreen() {


  const velib = useContext(VelibContext)
  
  
  if (!velib.velibs) {
    return (
      <ImageBackground style={styles.container}
      resizeMode='center'
      source={{uri: 'https://media.giphy.com/media/JrSU9r2TwaTXiQFNr3/giphy.gif'}}
      />
    )
  }

  const station = velib.velibs.records;
  const localPos = velib.position;

  return (
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
            title={station.fields.station_name}
          />
        ))
      }
    </MapView>
  ) 
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
