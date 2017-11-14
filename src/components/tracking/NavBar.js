import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class NavBar extends Component {
  changeTab(tab) {
    this.props.mainStore.trackingTab = tab;
  }

  render() {
    const active = { color: '#6764fe', textDecorationLine: 'underline' };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.changeTab('Calories')} style={styles.titleContainer}>
          <Text style={[styles.title, this.props.mainStore.trackingTab === 'Calories' ? active : {}]}>Calories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTab('Measurements')} style={styles.titleContainer}>
          <Text style={[styles.title, this.props.mainStore.trackingTab === 'Measurements' ? active : {}]}>Measurements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTab('Photos')} style={styles.titleContainer}>
          <Text style={[styles.title, this.props.mainStore.trackingTab === 'Photos' ? active : {}]}>Photos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: '#596375',
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingVertical: 10,
    marginRight: 15,
  },
});
