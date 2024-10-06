import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BreatheComponent from '@/components/Breathe';
import ScoreCounter from '@/components/ScoreCounter';

export default function TabTwoScreen() {
  const [showBreathe, setShowBreathe] = useState(false);

  const handleBoxClick = () => {
    setShowBreathe(true);
  };

    return (
    <View style={styles.bg}>
      {showBreathe ? (
        <BreatheComponent />
      ) : (
        <View style={styles.pageContainer}>
          <ScoreCounter score={10} backgroundColor="#F0E68C"/>
          <View style={styles.topBox}>
            <View style={styles.box} onTouchEnd={handleBoxClick}>
              <Text style={styles.boxText}>Breathe</Text>
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>Challenges</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Walk 3 miles</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Walk 1 mile with a friend</Text>
            </View>
          </View>
        </View>
      )}
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
