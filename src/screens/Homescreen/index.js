import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
    
  return (
    <View style={styles.root}>
        <View >
            <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg'}}/>
        </View>
        <View style={styles.itemNamePriceView}>
            <Text style={styles.itemName} numberOfLines={2}>Item name</Text>
            <Text style={styles.itemPrice}>Price</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    padding: 4,
    
  },
  image:{
      width: 150,
      height: 150,
  },
  itemNamePriceView:{
    flex:1,
    padding: 10,
  },
  itemName:{
    fontSize: 30,
  },
  itemPrice:{
    fontSize: 15,
  }
});

export default HomeScreen;
