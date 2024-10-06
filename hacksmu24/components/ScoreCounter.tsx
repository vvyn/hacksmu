import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ScoreCounterProps {
  score: number;
  backgroundColor?: string;  // Allow background color customization
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({ score, backgroundColor = '#ffffff' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Bone image */}
      <Image
        source={require('../assets/images/scoreBone.png')} // Adjust the path to your image
        style={styles.boneImage}
      />

      {/* Displaying the score */}
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,  // Rounded corners
    position: 'absolute',
    left: 20,           // Position to the left of the screen
    top: 50,            // Adjust as needed to position vertically
  },
  boneImage: {
    width: 30,
    height: 30,
    marginRight: 10,   // Space between bone image and score
    resizeMode: 'contain',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScoreCounter;
