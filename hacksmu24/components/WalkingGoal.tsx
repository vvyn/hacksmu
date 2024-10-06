import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WalkingGoal = () => {
  const [selectedGoal, setSelectedGoal] = useState('10k');

  return (
    <View style={styles.container}>
      
      <View style={styles.selectedGoalContainer}>
        <Text style={styles.selectedGoalText}>{selectedGoal}</Text>
      </View>
      
      <View style={styles.goalsContainer}>
        <TouchableOpacity onPress={() => setSelectedGoal('5k')} style={[styles.goalCircle, selectedGoal === '5k' && styles.selectedCircle]}>
          <Text style={styles.goalText}>5k</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGoal('10k')} style={[styles.goalCircle, selectedGoal === '10k' && styles.selectedCircle]}>
          <Text style={styles.goalText}>10k</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGoal('15k')} style={[styles.goalCircle, selectedGoal === '15k' && styles.selectedCircle]}>
          <Text style={styles.goalText}>15k</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Let's Go ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    width: '100%',
  },
  selectedGoalContainer: {
    width: 200, 
    height: 100,
    backgroundColor: 'lightblue', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  selectedGoalText: {
    fontSize: 30,
    color: '#fff',
  },
  goalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 40,
  },
  goalCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E0F7FA', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: '#00BCD4', 
  },
  goalText: {
    fontSize: 20,
    color: '#B0BEC5',
  },
  ctaButton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WalkingGoal;
