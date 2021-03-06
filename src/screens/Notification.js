import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NotiCell from '../components/notification/NotiCell';

export default class Notification extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#102037', '#1e3353']}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Notifications</Text>
        </View>
        <ScrollView>
          <NotiCell />
          <NotiCell />
          <NotiCell />
          <NotiCell />
          <NotiCell read />
          <NotiCell read />
          <NotiCell read />
          <NotiCell />
          <NotiCell read />
          <NotiCell />
          <NotiCell read />
          <NotiCell read />
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#11243c',
  },
  titleContainer: {
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'transparent',
  },
});
