import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BreatheComponent from '@/components/Breathe';
import ScoreCounter from '@/components/ScoreCounter';
import WalkingGoal from '@/components/WalkingGoal';

export default function TabTwoScreen() {
  

    return (
    <View style={styles.bg}>
      <WalkingGoal />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#62BAF4',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pageContainer : {
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 20,
  },
  header: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  box: {
    backgroundColor: 'white',
    width: 170,
    height: 140, 
    borderRadius: 10,
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  boxText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  topBox: {
    marginTop: 100,
  }
});
