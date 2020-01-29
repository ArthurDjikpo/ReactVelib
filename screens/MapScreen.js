import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      
        <Text>Map</Text>
    </View>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
  bottomStyle: {
    backgroundColor: '#f4511e',
  },
  bottomTintColor: '#fff',
  bottomTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
