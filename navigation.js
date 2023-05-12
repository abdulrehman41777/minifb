import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Authentication/Login';
import SignUp from './screens/Authentication/SignUp';




const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };


// create a component
const RootNavigation = () => {
    return (

 <NavigationContainer>
 <Stack.Navigator 
 initialRouteName="splashScreen"
  screenOptions={screenOptions}>
 <Stack.Screen name="splashscreen" component={SplashScreen} />
 <Stack.Screen name="Login" component={Login} />
 <Stack.Screen name="SignUp" component={SignUp} />
 </Stack.Navigator>
 </NavigationContainer>

    );
};

export default RootNavigation;