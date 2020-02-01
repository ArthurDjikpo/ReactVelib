import React from 'react';
import { View, StyleSheet,FlatList, Text, ImageBackground, Button } from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default function DetailsScreen({navigation}) {

  const  params  = navigation.getParam('detailsStationData'); 
  const name = params.station_name;
  const latitude = params.geo[0];
  const longitude = params.geo[1];
  const nbbike = params.nbbike;
  const nbebike = params.nbebike;
  const card = params.creditcard;

  return (
    <>
      <MapView
        style={styles.mapbox}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation = {true}
        followUserLocation = {true}
        zoomEnabled = {true}
      >
        <Marker coordinate={{
            latitude: latitude,
            longitude: longitude
        }}
          title={name}
        />  
      </MapView>
      <View style={styles.container}>

        <Text>Détails Station Vélib</Text>
        <Text>ℹ️ Nom: {name}</Text>
        <Text>🚲Vélos disponibles: {nbbike}</Text> 
        <Text>🔌Vélos électriques disponibles: {JSON.stringify(nbebike)}</Text> 
        <Text> Achat possible en station (CB) : {card}  </Text>

      </View>
    </>

  )}

DetailsScreen.navigationOptions = {
  title: 'Détails',
};

const styles = StyleSheet.create({
  mapbox: {
    flex: 0.4,
    alignItems: 'center', 
    justifyContent: 'center',

  },
  container: {
    flex: 0.6,
    alignItems: 'center', 
    justifyContent: 'center',

  },
});
