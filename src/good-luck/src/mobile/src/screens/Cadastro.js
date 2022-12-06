import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Text,
  TextInput
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
  
export default function (props) {
    const simpleAlertHandler = () => {
    alert('Usuario Cadastrado');
  };

  const uri2 = `http://localhost:8080/user/create`
  
  const cadastrar = async () => {
      const resp = await fetch(uri2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      simpleAlertHandler()
      props.navigation.navigate('Login')
  };

const [name, setNome] = useState('')
const [email, setEmail] = useState('')
const [password, setSenha] = useState('')

  return (
    <View style={styles.container}>

      <Text style={{textAlign:'center', fontSize:25, marginBottom:50}}>Vamos sortear... </Text>

      <TextInput style={styles.input} placeholder="Nome" onChangeText={(text) => setNome(text)} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => cadastrar()}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: '10%',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#7B68EE',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  input: {
    backgroundColor: '#FFF',
    marginTop:15,
    marginBottom: 8,
    height:50,
    textAlign:'center',
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'black',

    
  },

});
