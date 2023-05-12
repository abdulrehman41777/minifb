//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// create a component
const Login = ({navigation}) => {

    const LoginInapp = async () => {
        // const res = await 
    }
    

    const signUpdNav = () => {
        navigation.navigate("SignUp")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Heading}>Login</Text>
            <Text style={styles.text}>Name</Text>
            <TextInput
            // value={name}
            // onChangeText={onChangeName}
            style={styles.inputs}
            placeholder="User Name"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
          // value={name}
          // onChangeText={onChangeName}
          style={styles.inputs}
          placeholder="User Name"
          secureTextEntry={true}
        />
        <Button title='Login' onPress={LoginInapp}/>

        <Text>Don't have an account? Register Now!</Text>
        <Button title="signup" onPress={signUpdNav}/>
        </View>
    );
};

// define your styles

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    inputs: {
        borderWidth: 1,
        height: 40,
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 10,
      },
      text:{
        fontSize:30,
       fontWeight:"500" 
      },
      Heading:{
        fontSize:40,
        fontWeight:"900"
      }
});

//make this component available to the app
export default Login;
