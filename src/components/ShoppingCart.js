import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
import {connect} from 'react-redux';
  
const ShoppingCart=(props)=>{
    return(
        <ScrollView>
            <Text>This is Shopping cart</Text>
            <Button 
                title='Go to Products'
                onPress={() => props.navigation.navigate('Product')}/>
        </ScrollView>
    )
}

const mapStateToProps = (state)=>{
    console.log('thisis shoppingcart state',state)
    return {
    }
  }
export default connect(mapStateToProps)(ShoppingCart);

