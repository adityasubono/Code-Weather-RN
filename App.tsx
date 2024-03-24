import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home.tsx';
import Searching from './src/screens/Searching.tsx';
import Settings from './src/screens/Settings.tsx';
import CustomNavigationBarComponent from './src/components/CustomNavigationBarComponent.tsx';
import {
  SafeAreaContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {View} from 'react-native';
import DifferentWeather from './src/screens/DifferentWeather.tsx';
import Units from './src/screens/Units.tsx';

const Stack = createNativeStackNavigator();
function App() {
  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: props => <CustomNavigationBarComponent {...props} />,
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="Searching"
          component={Searching}
          options={{title: 'Searching'}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Setting Data'}}
        />
        <Stack.Screen
          name="Different"
          component={DifferentWeather}
          options={{title: 'Different Weather'}}
        />
        <Stack.Screen
          name="Units"
          component={Units}
          options={{title: 'Units'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
