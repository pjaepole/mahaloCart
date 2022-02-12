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
import {connect} from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
const ShoppingCart = props => {
  return (
    <ScrollView>
      {props.cartContents.length == 0 ? (
        <View style={styles.cartEmpty}><Text style={styles.cartEmptyText} >Cart is empty! Add Product to view</Text></View>
      ) : (
        <></>
      )}
      {props.cartContents.map(content => (
        <ShoppingCartItem key={content.id} item={content} />
      ))}
      <Button
        title="Go to Products"
        onPress={() => props.navigation.navigate('Product')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartEmpty: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'orange',
    height: 100,
  },
  cartEmptyText:{
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    cartContents: state.cart,
  };
};
export default connect(mapStateToProps)(ShoppingCart);
