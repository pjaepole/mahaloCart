import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button
  } from 'react-native';
  import {connect} from 'react-redux';
import {cartRemoveItem, cartAddItem } from '../actions/index';
const ProductIndividual=(props)=>{
    const {item}=props
    return(
        <View style={styles.root}>
        <View >
            <Image style={styles.image} source={{ uri: `${item.image}`}}/>
        </View>
        <View style={styles.itemNamePriceView}>
            <Text style={styles.itemName} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <View style={styles.itemButtonContainer}>
                <Button onPress={()=>props.dispatch(cartAddItem(item))} title='Add to Cart'/>
            </View>
        </View>
    </View>
    )
}

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
        resizeMode: 'contain',
    },
    itemNamePriceView:{
      flex:1,
      padding: 10,
    },
    itemName:{
      fontSize: 20,
    },
    itemPrice:{
      fontSize: 15,
    },
    itemButtonContainer:{
        marginTop:35,
    }
  });



  const mapStateToProps = (state)=>{
    return {
        cartContents:state.cart
    }
  }  
export default connect(mapStateToProps)(ProductIndividual);