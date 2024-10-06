import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
interface ScoreCounterProps {
  score: number;
  backgroundColor?: string;  
}
const ScoreCounter: React.FC<ScoreCounterProps> = ({ score, backgroundColor = '#ffffff' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        source={require('../assets/images/scoreBone.png')}
        style={styles.boneImage}
      />
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    position: 'absolute',
    left: 20,           
    top: 50,          
  },
  boneImage: {
    width: 30,
    height: 30,
    marginRight: 10,  
    resizeMode: 'contain',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default ScoreCounter;