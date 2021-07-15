import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../consts/colors';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import {useDispatch, useSelector} from 'react-redux';
import {Badge} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Image
                style={styles.aks}
                source={require('../assets/home.jpg')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Badge
                status="error"
                containerStyle={{
                  position: 'absolute',
                  top: -4,
                  right: -10,
                  zIndex: 1,
                }}
                value={state.length}
              />
              <Image
                style={styles.aks}
                source={require('../assets/shopping.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  aks: {
    width: 50,
    height: 50,
  },
});
