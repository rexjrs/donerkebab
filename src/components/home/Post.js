import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Post extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.top}>
                    <Image style={styles.profile} source={require('../../../assets/thomas.jpg')} />
                    <Text style={styles.title}>Garlic Chicken and Teriyaki Sauce</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>This was a wondering peice of chicken I had at the local diner today!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/garlic.jpg')} />
                </View>
                <TouchableOpacity style={styles.commentsContainer}>
                    <View style={styles.timeFlex}>
                        <Text style={styles.title}>1 week ago...</Text>
                    </View>
                    <View style={styles.commentFlex}>
                        <Text style={styles.title}>Comments (12)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    timeFlex: {
        flex: 0.5,
        alignItems: 'flex-start'
    },
    commentFlex: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    descriptionContainer: {
        marginBottom: 10,
        marginHorizontal: 15,
    },
    description: {
        color: 'rgba(255,255,255,0.5)'
    },
    commentsContainer: {
        marginBottom: 10,
        alignItems: 'flex-end',
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    imageContainer: {
        marginBottom: 10,
        marginHorizontal: 15,
        height: 180
    },
    image: {
        height: '100%',
        width: '100%'
    },
    top: {
        justifyContent: 'flex-start',
        margin: 10,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        margin: 10,
        backgroundColor: '#243c5e',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 0.3
    }
});
