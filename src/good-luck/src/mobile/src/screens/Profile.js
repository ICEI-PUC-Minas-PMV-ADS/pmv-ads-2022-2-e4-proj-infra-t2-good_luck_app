import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const History = ({ navigation }) => {
  const sair = async () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={styles.container}>
        <Text>Nome Usuário: João da Silva</Text>
      </View>
      <View style={styles.container}>
        <Text>Email: teste@teste.com</Text>
      </View>
      <View style={styles.container}>
        <Text>Data cadastro: 08/10/2022</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => sair()}>
        <Text style={styles.text}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
});
export default History;
