import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen.js';
import ResultScreen from './src/screens/ResultScreen.js';
import LocationScreen from './src/screens/LocationScreen.js';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultScreen,
  Location: LocationScreen,
}, {
  initialRouteName: 'Location',
  defaultNavigationOptions: {
    title: 'Find That Food'
  }
});

export default createAppContainer(navigator);
