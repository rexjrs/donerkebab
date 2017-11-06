import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class NotiCell extends Component {
    render() {
        return (
            <View style={[styles.container,{backgroundColor: this.props.read ? 'transparent' : 'rgba(255,255,255,0.1)'}]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/thomas.jpg')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Thomas Charlesworth commented on your lunch</Text>
                    <Text style={styles.chat}>55 minutes ago...</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    chat: {
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '300',
        fontSize: 12,
        backgroundColor: 'transparent'
    },
    name: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        backgroundColor: 'transparent'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    imageContainer: {
        flex: 0.3,
        alignItems: 'center'
    },
    textContainer: {
        flex: 0.7,
        justifyContent: 'center'
    }
});
