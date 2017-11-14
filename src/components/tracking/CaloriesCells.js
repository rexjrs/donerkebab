import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CaloriesCells extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.foodContainer}>
          <Text style={styles.food}>Chicken tikka masala</Text>
        </View>
        <View style={styles.calsContainer}>
          <Text style={styles.cals}>209</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 0,
    flexDirection: 'row',
    backgroundColor: '#243c5e',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  food: {
    backgroundColor: 'transparent',
    color: 'rgba(170,170,170,0.9)',
    fontWeight: 'bold',
  },
  cals: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
  },
  foodContainer: {
    flex: 0.7,
  },
  calsContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
});
