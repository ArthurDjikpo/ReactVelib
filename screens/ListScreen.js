import React, { useContext }from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { ListItem } from 'react-native-elements'

import {VelibContext} from '../exercices/exercice-context'

export default function ListScreen({navigation}) {

  const velib = useContext( VelibContext)
  if (!velib.velibs) {
    return (
      <ImageBackground style={styles.container}
      resizeMode='center'
      source={{uri: 'https://media.giphy.com/media/JrSU9r2TwaTXiQFNr3/giphy.gif'}}
      />
    )
  }
  function _onPress(detailsStationData){
    navigation.navigate("DetailsStation", {
      detailsStationData: detailsStationData
    })
  }
  return (
    <>
    <Text style={styles.title}> FavStations ⭐️</Text>
    <Text style={styles.title}> Stations 🚲</Text>

      <FlatList
        style={styles.container}
        renderItem={({ item }) => {
          return <TouchableOpacity
          style={styles.button}
          onPress={() => _onPress(
            item
          )}>
            <ListItem
            title= {item.fields.station_name}
            subtitle= {<Text>📍{parseInt(item.fields.dist)}m</Text>}
            bottomDivider
            chevron/>
        </TouchableOpacity>
        }}
        data={velib.velibs.records}
        keyExtractor={item => item.fields.station_code}
      />
    </>
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs",
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40
  }
});
