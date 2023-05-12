//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';
import * as Network from 'expo-network';


const SignUp = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginNav = () =>{
        navigation.navigate('Login');
    }

    const zero = async () => {
    const my = await  Network.getIpAddressAsync();
    console.log(my, "dfsdhjhdsjkchjsdcjkdsjn");

    }

    zero();


    const Register = async () => {
       
        try {
            //  console.log(name, email, password, 'cccccccccccc');
            const res = await axios.post('http://192.168.88.151:7000/auth/signup', {
                name: name,
                email:email,
                password:password
            })

            console.log(res.status);

        } catch (error) {
            console.log(error.message, 'uuuuu')
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.Heading}>SignUp</Text>
            <Text style={styles.text}>Name</Text>
            <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputs}
            placeholder="Name"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
        />
          <Text style={styles.text}>Password</Text>
          <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={false}
        />

        <Button title='Signup' onPress={Register} />

        <Text>Already have an account? Click To Login</Text>
        <Button title='Login' onPress={LoginNav}/>
        </View>
    );
};

// define your styles

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
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
export default SignUp;