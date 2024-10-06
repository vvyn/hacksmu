import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabTwoScreen() {
  return (
    <LinearGradient
      colors={['#62BAF4', '#56DDF4']}
      style={styles.bg}
    >
      <View style={styles.circle} />
      <Text style={styles.text}>breathe</Text>
      <Text style={styles.quote}>quote</Text>
      <View style={styles.btn}>
        <Text style={styles.btnText}>btn</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 25,
    color: 'black',
  },
});
