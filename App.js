import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductsContainer from './src/components/ProductsContainer';
import Navbar from './src/components/Navbar';
import ShoppingCart from './src/components/ShoppingCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Navbar />
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductsContainer}/>
        <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
