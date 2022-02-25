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
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUpForm = () => {
  return (
    <View
      style={{
        marginTop: 30,
        marginHorizontal: 30,
      }}>
      {/* Full Name */}
      <View style={{marginTop: 30}}>
        <Text>Full Name</Text>
        <TextInput
          style={{
            marginVertical: 10,
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 1,
            height: 40,
            color: '#FFFFFF',
          }}
          placeholder="Enter Full Name"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF"
        />
      </View>

      {/* Phone Number */}
      <View style={{marginTop: 20}}>
        <Text style={{color: '#E6FEF0'}}>Phone Number</Text>

        <View style={{flexDirection: 'row'}}>
          {/* Country Code */}
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              marginHorizontal: 5,
              borderBottomColor: "#FFFFFF",
              borderBottomWidth: 1,
              flexDirection: 'row',
              
            }}
            onPress={() => setModalVisible(true)}>
            <View style={{justifyContent: 'center'}}>
              {/* <Image
                source={}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: "#FFFFFF",
                }}
              /> */}
            </View>
            <View style={{justifyContent: 'center', marginLeft: 5}}>
              {/* <Image
                source={{uri: selectedArea?.flag}}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              /> */}
            </View>

            <View style={{justifyContent: 'center', marginLeft: 5}}>
              <Text style={{color: '#FFFFFF'}}>111</Text>
            </View>
          </TouchableOpacity>

          {/* Phone Number */}
          <TextInput
            style={{
              flex: 1,
              marginVertical: 10,
              borderBottomColor: '#FFFFFF',
              borderBottomWidth: 1,
              height: 40,
              color: '#FFFFFF',
            }}
            placeholder="Enter Phone Number"
            placeholderTextColor="#FFFFFF"
            selectionColor="#FFFFFF"
          />
        </View>
      </View>

      {/* Password */}
      <View style={{marginTop: 20}}>
        <Text style={{color: '#E6FEF0'}}>Password</Text>
        <TextInput
          style={{
            marginVertical: 10,
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 1,
            height: 40,
            color: '#FFFFFF',
          }}
          placeholder="Enter Password"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF"
          //   secureTextEntry="true"
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            bottom: 10,
            height: 30,
            width: 30,
          }}
          onPress={() => setShowPassword()}>
          {/* <Image
            source={showPassword ? icons.disable_eye : icons.eye}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.white,
            }}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpForm;
