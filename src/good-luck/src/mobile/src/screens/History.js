import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
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
    <View>
      <ScrollView >
        <FlatList
          data={result}
          keyExtractor={({ messageId }, index) => messageId}
          renderItem={({ item }) => (
            <View>
              <View style={styles.container}>
                <TouchableOpacity onPress={() => {}}></TouchableOpacity>

                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text style={styles.name}>Nº Sorteado: {item.RaffleUserDrawn}</Text>
                    <Text style={styles.time}>10:58 am</Text>
                  </View>

                  <View style={styles.contentFooter}>
                    <Text>Nome: {item.RaffleName}</Text>
                    <TouchableOpacity
                      style={styles.contentFooterbtn}
                      onPress={() => {}}>
                      <Text>SORTEAR</Text>

                      <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={require('../../assets/logo.png')}
                      />
                    </TouchableOpacity>
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
  contentFooterbtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  image: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default History;
