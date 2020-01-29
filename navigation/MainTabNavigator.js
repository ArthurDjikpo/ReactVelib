import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Ionicons } from '@expo/vector-icons';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const ListStack = createStackNavigator(
  {
    Home: ListScreen,
  }
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
    // tabBarIcon: () => (
    //   <View>
    //     <Ionicons name="md-home" color={{color:'black'}} size={50} />
    //   </View>
      
    // ),
  }
);

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  
};

export default createBottomTabNavigator({
  ListStack,
  MapStack,
});