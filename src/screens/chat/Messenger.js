import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.keyboardValue = new Animated.Value(0);
  }

  keyboardTriggered(value) {
    Animated.timing(
      this.keyboardValue,
      {
        toValue: value,
        duration: 250,
        delay: 0,
      },
    ).start();
  }

  render() {
    return (
      <LinearGradient
        colors={['#102037', '#1e3353']}
        style={styles.container}
      >
        <ScrollView>

        </ScrollView>
        <Animated.View style={[styles.chatBox, { bottom: this.keyboardValue }]}>
          <TextInput
            placeholder="Say something.."
            placeholderTextColor="rgba(170,170,170,0.9)"
            style={styles.input}
            onBlur={() => this.keyboardTriggered(0)}
            onFocus={() => this.keyboardTriggered(230)}
            keyboardAppearance="dark"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="ios-arrow-round-up" type="ionicon" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#6069FF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
  },
  chatBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#122333',
    color: 'white',
    marginLeft: 20,
    marginRight: 30,
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
