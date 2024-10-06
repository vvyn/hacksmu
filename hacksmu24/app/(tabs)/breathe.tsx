import { StyleSheet} from 'react-native';
import React from 'react';
import { View, Text } from 'react-native';

export default function TabTwoScreen() {
    return (
    <View style={styles.bg}>
      <View style={styles.circle} />
      <Text style={styles.text}>breathe</Text>
      <Text style={styles.quote}>quote</Text>
      <Text style={styles.btn}>btn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62BAF4',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200, 
    borderRadius: 200,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
  quote: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'white',
    width: 150,
    height: 40, 
    borderRadius: 100,
    fontSize: 25,
    textAlign: 'center',
  },
});
