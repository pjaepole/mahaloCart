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
import ShoppingCartItem from './ShoppingCartItem';
const ShoppingCart=(props)=>{
    return(
        <ScrollView>
            
            {props.cartContents.map((content)=>(<ShoppingCartItem key={content.id} item={content}/>))}
            <Button 
                title='Go to Products'
                onPress={() => props.navigation.navigate('Product')}/>
        </ScrollView>
    )
}

const mapStateToProps = (state)=>{
    return {
        cartContents:state.cart
    }
}
export default connect(mapStateToProps)(ShoppingCart);

