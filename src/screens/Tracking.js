import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { TrackingTabs } from '../routing/Router';
import NavBar from '../components/tracking/NavBar';
import LinearGradient from 'react-native-linear-gradient';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class Tracking extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>My Progress</Text>
                </View>
                <NavBar />
                <TrackingTabs
                    onNavigationStateChange={(prevState, currentState) => {
                        this.props.mainStore.previousTrackingTab = currentState.routes[currentState.index].routeName
                        this.props.mainStore.trackingTab = currentState.routes[currentState.index].routeName
                    }}
                    screenProps={this.props.screenProps}
                />
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
