import React,{useState} from 'react';
import { View, StyleSheet,FlatList, Text, ImageBackground, Button } from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import { ListItem, Card, CheckBox, Tile } from 'react-native-elements'


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
  const dist = parseInt(params.fields.dist);
  

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
      <Card title={name} styles={styles.container}>

      <ListItem title = { <Text>🚶‍♂️à {dist}m de toi</Text>}/> 
        <ListItem title = { <Text>🚲Vélos disponibles: {nbbike}</Text>}/> 
        <ListItem title = {<Text>🔌Vélos électriques disponibles: {JSON.stringify(nbebike)}</Text>}/> 
        <ListItem title = {<Text>💳Achat possible en station (CB) : {
        card == "yes"
        ? " ✅ "
        : " ❌"} </Text>} />
        <ListItem title = { <Text>⏰ Dernière mise a jour à {realTime}</Text>}/>

        <CheckBox
        center
         title = {inFav == false
            ? "⭐️ Ajouter aux favoris"
            : "❌ Supprimer aux favoris"}
        />


      </Card>
    </>

  )}

DetailsScreen.navigationOptions = {
  title: 'Details Sation Velibs',
};

const styles = StyleSheet.create({
  mapbox: {
    flex: 0.6,
    alignItems: 'center', 
    justifyContent: 'center',

  },
  container: {
    flex: 0.4,
    alignItems: 'center', 

  },
  title: {
    fontSize: 20
  },
});
