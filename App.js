import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomNavigator from './components/navigation/BottomNavigator';
import OnBroad from './components/screens/onBroad';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './components/screens/CartScreen';
import {Provider} from 'react-redux';
import {store} from './components/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Initial" component={OnBroad} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
