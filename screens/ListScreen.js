import React, { useContext }from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import {VelibContext} from '../exercices/exercice-context'

export default function ListScreen({navigation}) {

  const velib = useContext( VelibContext)
  if (!velib.velibs) {
    return (
      <Text> Please wait....</Text>
    )
  }
  function _onPress(detailsStationData){
    navigation.navigate("DetailsStation", {
      detailsStationData: detailsStationData
    })
  }
  return velib instanceof Object ? (
    <>
      <FlatList
        style={styles.container}
        renderItem={({ item }) => {
          return <TouchableOpacity
          style={styles.button}
          onPress={() => _onPress(
            item.fields
          )}>
            <Text>{item.fields.station_name}({item.fields.dist}m)</Text>
        </TouchableOpacity>
        }}
        data={velib.velibs.records}
        keyExtractor={item => item.fields.station_code}
      />
    </>
  ): <Text> Please wait....</Text>;
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
