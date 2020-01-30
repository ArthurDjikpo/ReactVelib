import React, { useState, useEffect }from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { getVelibFromApi } from '../exercices/exercice3-API' 
// import { Ionicons } from '@expo/vector-icons';


export default function ListScreen({navigation}) {

  const [velib, setVelib] = useState([]);

  useEffect(() => {
    getVelibFromApi().then(data=>{
      setVelib(data)
    })
  },[]);
  function _onPress(detailsStationData){
    navigation.navigate("DetailsStation", {
      detailsStationData: detailsStationData
    })
  }
  return (
    <>
      <FlatList
        style={styles.container}
        renderItem={({ item }) => {
          return <TouchableOpacity
          style={styles.button}
          onPress={() => _onPress(
            item.fields
          )}>
            <Text>{item.fields.station_name}</Text>
        </TouchableOpacity>
        }}
        data={velib}
        // keyExtractor={item => item.recordsId}
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
});
