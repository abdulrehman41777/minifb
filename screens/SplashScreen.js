import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const SplashScreen = ({navigation}) => {


    
    const nextpage = () => {
        navigation.navigate('Login');
    }


    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:"700" }}>Welcome Home baby</Text>
            <Button title='Get started' onPress={nextpage} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default SplashScreen;
