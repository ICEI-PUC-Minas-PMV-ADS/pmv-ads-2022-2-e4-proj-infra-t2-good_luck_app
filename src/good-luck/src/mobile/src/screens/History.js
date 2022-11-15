import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

const History = ({ navigation }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    apiGetRaffles();
  }, []);

  const apiGetRaffles = async () => {
    const data = await fetch(
      'https://good-luck-app-back-end.herokuapp.com/raffle/all',
      {
        method: 'GET',
      }
    );
    const jsonData = await data.json();
    setResult(jsonData);
  };
  return (
    <div>
      <ScrollView style={{ marginBottom: 200 }}>
        <FlatList
          data={result}
          keyExtractor={({ messageId }, index) => messageId}
          renderItem={({ item }) => (
            <View>
              <View style={styles.container}>
                <TouchableOpacity onPress={() => {}}></TouchableOpacity>

                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text style={styles.name}>Nº {item.idRaffle}</Text>
                    <Text style={styles.time}>10:58 am</Text>
                  </View>

                  <View style={styles.contentFooter}>
                    <Text>Nome: {item.RaffleName}</Text>
                  </View>

                  <View style={styles.contentFooter}>
                     <Text>Participantes: {item.RaffleParticipants}</Text>
                  </View>

                  <View style={styles.contentFooter}>
                     <Text>Data: {item.date}</Text>
                  </View>

                  <View style={styles.contentFooter}>
                    <Text>Descrição: {item.description}</Text>
                    <TouchableOpacity style={styles.icon} onPress={() => {}}>
                      <Icon name="delete" color="#517fa4" />
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </div>
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 10,
  },

  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default History;
