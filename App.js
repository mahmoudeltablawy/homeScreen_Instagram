import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from "./screens/splashScreen"
import homeScreen from "./screens/homeScreen"
import storyScreen from "./screens/storyScreen"
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splashScreen' headerMode='none' >
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="storyScreen" component={storyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
