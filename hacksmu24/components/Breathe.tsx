import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BreatheComponent() {
    return (
        <View style={styles.bg}>
            <View style={styles.circle} />
            <Text style={styles.text}>The beginning is always today</Text>
            <Text style={styles.btn}>breathe</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62BAF4',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  circle: {
    width: 200,
    height: 200, 
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: 'white',
    width: 150,
    height: 50, 
    borderRadius: 25,
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 5,
    color: 'black',
  },
});
