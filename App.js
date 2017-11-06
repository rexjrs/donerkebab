import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    AsyncStorage,
    LayoutAnimation
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { mainStore } from './src/stores/MainStore';
import { Tabs, LoginStack } from './src/routing/Router';
import { Provider, observer } from 'mobx-react';
const config = {
    apiKey: "AIzaSyC-d-TWhGDOWxEgkc94uZrZK5irRh8FE4Y",
    authDomain: "donerkebab-e1ded.firebaseapp.com",
    databaseURL: "https://donerkebab-e1ded.firebaseio.com",
    projectId: "donerkebab-e1ded",
    storageBucket: "donerkebab-e1ded.appspot.com",
    messagingSenderId: "531243947613"
};
firebase.initializeApp(config);
const db = firebase.firestore();

@observer export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needLogin: false
        }
    }

    componentWillMount() {
        this.checkAuth()
    }

    checkAuth() {
        AsyncStorage.multiGet(['token', 'email', 'id'], (err, result) => {
            if (result[0][1]) {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                mainStore.userData = {
                    token: result[0][1],
                    email: result[1][1],
                    id: result[2][1]
                }
                mainStore.authPass = true
            } else {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                mainStore.needLogin = true
            }
        })
    }

    render() {
        return (
            <Provider
                mainStore={mainStore}
            >
                <View
                    style={styles.container}
                    source={require('./assets/gradientbg.png')}
                >
                    <StatusBar
                        barStyle="light-content"
                    />
                    {mainStore.authPass &&
                        <Tabs
                            screenProps={{
                                db: db
                            }}
                        />
                    }
                    {!mainStore.authPass &&
                        mainStore.needLogin &&
                        <LoginStack
                            screenProps={{
                                db: db
                            }}
                        />
                    }
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10233b"
    },
});
