import React from 'react';
import {
  
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Text>Mahalo Jaehun Park</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbarContainer: {
    borderWidth: 0,
    backgroundColor: '#e47911',
    height: '3%',
  },
});
export default Navbar;
