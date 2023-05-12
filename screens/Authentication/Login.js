//import liraries
import axios from "axios";
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { BASE_URL } from "../../config/config";

// create a component
const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");

  const LoginInapp = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });
      console.log(res.data, 'data');
    } catch (error) {
      console.log(error);
    }
  };

  const signUpdNav = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Login</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={styles.inputs}
        placeholder="Name"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        value={password}
        onChangeText={onChangePass}
        style={styles.inputs}
        placeholder="Passowrd"
        secureTextEntry={false}
      />
      <Button title="Login" onPress={LoginInapp} />

      <Text>Don't have an account? Register Now!</Text>
      <Button title="signup" onPress={signUpdNav} />
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  inputs: {
    borderWidth: 1,
    height: 40,
    width: "90%",
    backgroundColor: "white",
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
  },
  Heading: {
    fontSize: 40,
    fontWeight: "900",
  },
});

//make this component available to the app
export default Login;
