import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Text,
  TextInput,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function (props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState('');

  const simpleAlertHandler = () => {
    alert('USUARIO INVALIDO');
  };
  const gatCadastro = async () => {
    props.navigation.navigate('Cadastro');
  };

  const getUser = async () => {
    const uri2 = 'http://localhost:8080/users/auth';

    try {
      const resp = await fetch(uri2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      });
      props.setEmail(email);
      console.log(resp);
      if (!resp.ok) {
        throw new Error(`Error! status: ${resp.status}`);
      }
      const result = await resp.json();
      if (result.message === 'Incorrect Username and/or Password!') {
        console.log('Usuário não validado');
        return false;
      } else {
        console.log('Usuário validado');
        return props.navigation.navigate('Index');
      }
    } catch (err) {
      console.log(err);
    }
    props.navigation.navigate('Index');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        resizeMode={'contain'}
        source={require('../../assets/logo.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => getUser()}>
        <Text style={styles.text}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => gatCadastro()}>
        <Text style={styles.text}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
  stretch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 15,
    marginBottom: 8,
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 20,
  },
});
