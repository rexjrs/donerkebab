import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Seperator extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.text}>2 November 2017</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
