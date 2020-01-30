import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const TabIcon = (props) => (
  <Ionicons
    name={'md-apps'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default function HomeScreen({navigation}) {
  return (
    <>
      <ImageBackground style={ styles.container } 
        resizeMode='cover' 
        source={{uri: 'https://voiturelectrique.eu/wp-content/uploads/2019/09/voiturelectrique.eu_.Jump-by-Uber2019-09-01-17.11.05.jpg'}}/>
        <Button
          title="Go to Map"
          onPress={() => navigation.navigate('Links')}
        />
        <Button
          title="Go to List"
          onPress={() => navigation.navigate('Velib')}
        />
    </>

  )}

HomeScreen.navigationOptions = {
  title: 'Bienvenue ! ',
  tabBarIcon: TabIcon
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
});
