import React from 'react';
import {
    Platform,
    TouchableOpacity
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Screens
import Home from '../screens/Home';
import AddPost from '../screens/home/AddPost';
import Tracking from '../screens/Tracking';
import Calories from '../screens/tracking/Calories';
import Measurements from '../screens/tracking/Measurements';
import Photos from '../screens/tracking/Photos';
import Chat from '../screens/Chat';
import Messenger from '../screens/chat/Messenger';
import Notification from '../screens/Notification';
import More from '../screens/More';
import Personal from '../screens/more/Personal';

import MainPage from '../screens/login/MainPage';
import SignUp from '../screens/login/SignUp';
import Login from '../screens/login/LoginPage';

export const transparentHeader = {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 0
}

export const headerTitleStyle = {
    color: 'white'
}

export const LoginStack = StackNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions: {
            header: false
        },
    },
    Login: {
        screen: Login,
        navigationOptions: props => ({
            headerStyle: transparentHeader,
            title: 'Sign Up',
            headerTitleStyle: headerTitleStyle,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingLeft: 20 }}>
                    <Icon name="md-arrow-round-back" type="ionicon" size={30} color="#6963f9" />
                </TouchableOpacity>
            )
        }),
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: props => ({
            headerStyle: transparentHeader,
            title: 'Sign Up',
            headerTitleStyle: headerTitleStyle,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingLeft: 20 }}>
                    <Icon name="md-arrow-round-back" type="ionicon" size={30} color="#6963f9" />
                </TouchableOpacity>
            )
        }),
    }
})

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: false
        },
    },
    AddPost: {
        screen: AddPost,
        navigationOptions: props => ({
            headerStyle: transparentHeader,
            title: props.navigation.state.params.name,
            headerTitleStyle: headerTitleStyle,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingLeft: 20 }}>
                    <Icon name="md-arrow-round-back" type="ionicon" size={30} color="#6963f9" />
                </TouchableOpacity>
            )
        }),
    },
});
export const TrackingStack = StackNavigator({
    Tracking: {
        screen: Tracking,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false
        },
    },
});

export const TrackingTabs = TabNavigator({
    Calories: {
        screen: Calories,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false,
            tabBarVisible: false
        },
    },
    Measurements: {
        screen: Measurements,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false,
            tabBarVisible: false
        },
    },
    Photos: {
        screen: Photos,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false,
            tabBarVisible: false
        },
    },
    }, {
        tabBarOptions: {
           
        },
        swipeEnabled: true,
        animationEnabled: true
});

export const ChatStack = StackNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false
        },
    },
    Messenger: {
        screen: Messenger,
        navigationOptions: props => ({
            headerStyle: transparentHeader,
            title: props.navigation.state.params.name,
            headerTitleStyle: headerTitleStyle,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingLeft: 20 }}>
                    <Icon name="md-arrow-round-back" type="ionicon" size={30} color="#6963f9" />
                </TouchableOpacity>
            )
        }),
    },
});
export const NotificationStack = StackNavigator({
    Notification: {
        screen: Notification,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false
        },
    },
});
export const MoreStack = StackNavigator({
    More: {
        screen: More,
        navigationOptions: {
            headerStyle: transparentHeader,
            header: false
        },
    },
    Personal: {
        screen: Personal,
        navigationOptions: props => ({
            headerStyle: transparentHeader,
            title: 'Personal',
            headerTitleStyle: headerTitleStyle,
            headerLeft: (
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingLeft: 20 }}>
                    <Icon name="md-arrow-round-back" type="ionicon" size={30} color="#6963f9" />
                </TouchableOpacity>
            )
        }),
    },
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" type="ionicon" size={27} color={tintColor} />)
        }
    },
    Tracking: {
        screen: TrackingStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-add-circle" type="ionicon" size={27} color={tintColor} />)
        }
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-chatboxes" type="ionicon" size={27} color={tintColor} />)
        }
    },
    Notification: {
        screen: NotificationStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-notifications" type="ionicon" size={27} color={tintColor} />)
        }
    },
    More: {
        screen: MoreStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-more" type="ionicon" size={27} color={tintColor} />)
        }
    },
}, {
        tabBarOptions: {
            style: {
                backgroundColor: '#142234',
                height: 50,
                padding: 0,
                margin: 0,
                borderBottomWidth: (Platform.OS === 'ios') ? 0 : 0.2,
                borderBottomColor: "#CCC"
            },
            showLabel: false,
            activeTintColor: "white",
            inactiveTintColor: "#78828b",
            indicatorStyle: {
                backgroundColor: "white"
            }
        },
        initialRouteName: "Home",
        
    }
);