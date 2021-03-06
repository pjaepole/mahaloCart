import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import ProductIndividual from './ProductIndividual';
import Data from '../data/products';
import {connect} from 'react-redux';
const ProductsContainer = props => {
  console.log('thisis', props);
  return (
    <ScrollView>
      <Button
        title="Go TO Cart"
        onPress={() => props.navigation.navigate('Shopping Cart')}
      />
      <Button
        title="Sign up form"
        onPress={() => props.navigation.navigate('SignUp Form')}
      />
      {Data.map(item => (
        <ProductIndividual key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
});

const mapStateToProps = state => {
  console.log('thisis productContainer state', state.cart);
  return {
    cartContents: state.cart,
  };
};
export default connect(mapStateToProps)(ProductsContainer);
