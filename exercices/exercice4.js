import React,{useState} from 'react';
import { View, StyleSheet,FlatList, Text, ImageBackground, Button } from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default function DetailsScreen({navigation}) {

  const [inFav, setInFav] = useState(false);

  const  params  = navigation.getParam('detailsStationData'); 
  const name = params.fields.station_name;
  const latitude = params.fields.geo[0];
  const longitude = params.fields.geo[1];
  const nbbike = params.fields.nbbike;
  const nbebike = params.fields.nbebike;
  const card = params.fields.creditcard;
  const date = new Date (params.record_timestamp);
  

  const realTime =
    date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds();

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

        <Text h1>ℹ️ Nom: {name}</Text>
        <Text>🚲Vélos disponibles: {nbbike}</Text> 
        <Text>🔌Vélos électriques disponibles: {JSON.stringify(nbebike)}</Text> 
        <Text>💳Achat possible en station (CB) : {
        card == "yes"
        ? " ✅ "
        : " ❌"}  </Text>
        <Text>⏰ Dernière mise a jour à {realTime}</Text>

        <Text>
          {inFav == false
            ? "⭐️ Ajouter aux favoris"
            : "❌ Supprimer aux favoris"}
        </Text>


      </View>
    </>

  )}

DetailsScreen.navigationOptions = {
  title: 'Details Sation Velibs',
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
