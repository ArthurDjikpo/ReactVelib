import React, { useState, useEffect }from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  AsyncStorage, 
  View
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';


export default function ListScreen() {

  const [velib, setVelib] = useState([]);


  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem("velib",data);
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('velib');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  async function getVelibFromApi() {
    try {
      let response = await fetch(
        'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel',
      );
      let responseJson = await response.json();
      let dataStingify = JSON.stringify(responseJson.records)
       _storeData(dataStingify)
      return responseJson.records


    } catch (error) {
      console.error(error);
    }
  }
  
  
  useEffect(() => {
    getVelibFromApi().then(data=>{
      setVelib(data)
      //console.log(data)
    })
  },[]);



  return (
    <>
      <View style={styles.container}>
        <Text>Nombre de velib : {JSON.stringify(velib)}</Text>
      </View>
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
