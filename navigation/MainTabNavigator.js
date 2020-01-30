import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Ionicons } from '@expo/vector-icons';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../exercices/exercice4';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const ListStack = createStackNavigator(
  {
    Velib: ListScreen,
    DetailsStation: DetailsScreen
  }
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  MapStack,
});