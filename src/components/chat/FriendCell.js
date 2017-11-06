import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class FriendCell extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Messenger', {name: 'Thomas Charlesworth'})} style={styles.container}>
                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.backBubble}></View>
                        <View style={[styles.onlineBubble,{backgroundColor: this.props.active ? '#2FDD52' : '#CCC'}]}></View>
                        <Image style={styles.image} source={require('../../../assets/thomas.jpg')} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Thomas Charlesworth</Text>
                    <Text style={styles.chat}>Did you check out my latest com...</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    backBubble: {
        position: 'absolute',
        width: 17,
        height: 17,
        backgroundColor: '#102037',
        right: 4,
        top: 1,
        borderRadius: 8.5,
        zIndex: 1
    },
    onlineBubble: {
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: '#2FDD52',
        right: 7,
        top: 4,
        borderRadius: 5,
        zIndex: 2
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
