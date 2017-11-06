import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import { mainStore } from './src/stores/MainStore';
import { Tabs, LoginStack } from './src/routing/Router';
import { Provider } from 'mobx-react';
import { observer } from 'mobx-react';

@observer export default class App extends Component {
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
                            }}
                        />
                    }
                    {!mainStore.authPass &&
                        <LoginStack
                            screenProps={{
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
        flex: 1
    },
});
