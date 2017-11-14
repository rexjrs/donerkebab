import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import CaloriesCells from '../../components/tracking/CaloriesCells';
import Seperator from '../../components/home/Seperator';

@inject('mainStore')
@observer export default class Calories extends Component {
  componentWillUpdate() {
    this.updateTab();
  }

  updateTab() {
    if (this.props.mainStore.trackingTab !== this.props.mainStore.previousTrackingTab) {
      this.props.navigation.navigate(this.props.mainStore.trackingTab);
      this.props.mainStore.previousTrackingTab = this.props.mainStore.trackingTab;
    }
  }

  render() {
    // Do not remove
    console.log(this.props.mainStore.trackingTab); // this console log. This makes sure updateTab is fired.
    // Do not remove
    return (
      <View style={styles.container}>
        <View style={styles.periodContainer}>
          <View style={styles.period}>
            <Text style={styles.count}>1,829</Text>
            <Text style={styles.countType}>Daily Intake</Text>
          </View>
          <View style={styles.period}>
            <Text style={styles.count}>8,129</Text>
            <Text style={styles.countType}>Weekly Intake</Text>
          </View>
          <View style={styles.period}>
            <Text style={styles.count}>12,390</Text>
            <Text style={styles.countType}>Monthly Intake</Text>
          </View>
        </View>
        <ScrollView>
          <Seperator />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <Seperator />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <Seperator />
          <CaloriesCells />
          <CaloriesCells />
          <Seperator />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
          <CaloriesCells />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  periodContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  period: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  count: {
    color: 'white',
    fontWeight: 'bold',
  },
  countType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#596375',
  },
  title: {
    color: 'white',
  },
});
