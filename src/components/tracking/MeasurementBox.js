import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class MeasurementsBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>{this.props.type}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.plusBtn}>
              <Icon name="ios-add-circle" type="ionicon" size={25} color="#6764fe" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>17th Dec 2016</Text>
          </View>
          <View style={styles.intContainer}>
            <Text style={styles.text}>291</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>15th Dec 2016</Text>
          </View>
          <View style={styles.intContainer}>
            <Text style={styles.text}>320</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>10th Dec 2016</Text>
          </View>
          <View style={styles.intContainer}>
            <Text style={styles.text}>342</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    marginLeft: 10,
    backgroundColor: 'transparent',
    flex: 0.7,
  },
  plusBtn: {
    backgroundColor: 'white',
    height: 27,
    width: 27,
    borderRadius: 23.5,
    paddingTop: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
    marginRight: 15,
  },
  text: {
    color: 'rgba(170,170,170,0.9)',
  },
  dateContainer: {
    flex: 0.7,
  },
  intContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  cell: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    marginVertical: 2,
  },
  top: {
    justifyContent: 'flex-start',
    margin: 10,
    marginBottom: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    backgroundColor: '#243c5e',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    paddingBottom: 10,
  },
});
