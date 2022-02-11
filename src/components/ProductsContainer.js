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
import ProductIndividual from './ProductIndividual';
import Data from '../data/products';
const ProductsContainer =()=>{
    return(
        <ScrollView>
            <Text style={styles.header}>Mock Products</Text>
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