import {
    AsyncStorage, 
  } from 'react-native';
  
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

  export async function getVelibFromApi() {
    try {
      let response = await fetch(URL);
      let responseJson = await response.json();
      let dataStingify = JSON.stringify(responseJson.records)
       _storeData(dataStingify)
      return responseJson.records


    } catch (error) {
      console.error(error);
    }
  }