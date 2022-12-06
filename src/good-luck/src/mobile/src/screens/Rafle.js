import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TextInput, Alert } from 'react-native-paper';

export default function Cadastrar(props) {
  const uri2 = 'https://localhost:8080/raffle/create';

  // Limpa os campos após postagem
  const [nomeSorteio, setNomeSorteio] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [data, setDataSorteio] = useState('');
  const [description, setDescription] = useState('');
  //Emite alerta após postar a mensagem
  const simpleAlertHandler = () => {
    alert('Mensagem postada', 'Olá sua mensagem foi postada com sucesso');
  };

  const cadastrar = async () => {
    const resp = await fetch(uri2, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nomeSorteio, participantes, data, description }),
    });
    this.textInputNome.clear();
    this.textInputMsm.clear();
    this.textParticipantes.clear()
    this.textinputData.clear()
    simpleAlertHandler();
  };

  return (
    <View style={{ padding: 5, margin: 10 }}>
      <Text>Criar um sorteio: </Text>
      <TextInput
        ref={(inputMsm) => {
          this.textInputMsm = inputMsm;
        }}
        placeholder="Titulo"
        onChangeText={(txt) => setNomeSorteio(txt)}
        underlineColorAndroid="transparent"
      />
      <TextInput
        ref={(inputParticipantes) => {
          this.textParticipantes = inputParticipantes;
        }}
        placeholder="Quant. Participantes"
        onChangeText={(text) => setParticipantes(text)}
        underlineColorAndroid="transparent"
      />
      <TextInput
        ref={(inputData) => {
          this.textinputData = inputData;
        }}
        placeholder="Data sorteio"
        onChangeText={(text) => setDataSorteio(text)}
        underlineColorAndroid="transparent"
      />
      <TextInput
        ref={(inputNome) => {
          this.textInputNome = inputNome;
        }}
        placeholder="Descrição"
        onChangeText={(text) => setDescription(text)}
        underlineColorAndroid="transparent"
      />
      <Text style={{ margin: 10 }}>
        <Button title="Postar" onPress={() => cadastrar()} />
      </Text>
    </View>
  );
}
