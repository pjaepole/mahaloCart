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
import ProductIndividual from './ProductIndividual';
import Data from '../data/products';
const ProductsContainer =(props)=>{
    console.log('thisis',props)
    return(
        <ScrollView>
            <Button 
                title='Go TO Cart'
                onPress={() => props.navigation.navigate('Shopping Cart')}/>
            {Data.map((item)=>(<ProductIndividual key={item.id} item={item}/>))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
   header:{
    fontSize: 30,
   }
  });

export default ProductsContainer