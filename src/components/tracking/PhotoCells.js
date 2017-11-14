import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ProfileImage from '../../../assets/thomas.jpg';

export default class PhotoCells extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>22nd December 2017</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={ProfileImage} style={styles.image} />
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
  },
  imageContainer: {
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
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
