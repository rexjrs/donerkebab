import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

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
        marginHorizontal: 10
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent'
    }
});
