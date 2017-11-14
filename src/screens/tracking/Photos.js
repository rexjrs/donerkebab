import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PhotoCells from '../../components/tracking/PhotoCells';

export default class Photos extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <PhotoCells />
          <PhotoCells />
        </ScrollView>
        <TouchableOpacity style={styles.plusBtn}>
          <Icon name="ios-add-circle" type="ionicon" size={50} color="#6764fe" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
  },
  plusBtn: {
    backgroundColor: 'white',
    width: 52,
    height: 52,
    borderRadius: 26,
    position: 'absolute',
    bottom: 10,
    right: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
});
