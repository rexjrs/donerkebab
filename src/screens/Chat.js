import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FriendCell from '../components/chat/FriendCell';

export default class Chat extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chats</Text>
                </View>
                <ScrollView>
                    <FriendCell navigation={this.props.navigation} active={true}/>
                    <FriendCell navigation={this.props.navigation} active={true}/>
                    <FriendCell navigation={this.props.navigation} active={true}/>
                    <FriendCell navigation={this.props.navigation} />
                    <FriendCell navigation={this.props.navigation} active={true}/>
                    <FriendCell navigation={this.props.navigation}/>
                    <FriendCell navigation={this.props.navigation} active={true}/>
                    <FriendCell navigation={this.props.navigation} />
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#11243c'
    },
    titleContainer: {
        marginTop: 20,
        paddingLeft: 20
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: 'white',
        backgroundColor: "transparent"
    }
});
