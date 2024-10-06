import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const BreathingExercise: React.FC = () => {
  const [completed, setCompleted] = useState(false);
  const [breathsCompleted, setBreathsCompleted] = useState(0);
  const navigation = useNavigation(); 
  const handlePress = () => {
    setCompleted(true);
    setBreathsCompleted(breathsCompleted + 1);
    // navigation.navigate('Breath'); 
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={require('../assets/images/breathing.gif')}
        style={styles.gif}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {completed
            ? 'Great job! You completed your daily breathing exercise.'
            : 'Take a deep breath and relax. Start your daily breathing exercise!'}
        </Text>
        <Text style={styles.number}>Breaths completed: {breathsCompleted}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 20,
    borderRadius: 15,
    margin: 10,
  },
  gif: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, 
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  number: {
    fontSize: 14,
    color: '#888',
  },
});
export default BreathingExercise;