import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SignUp extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#102037', '#1e3353']}
        style={styles.container}
      >

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
