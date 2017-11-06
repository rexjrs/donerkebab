import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
    AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class More extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                {
                    title: 'Personal',
                    color: '#6465fd',
                    icon: 'ios-person',
                    onPress: ()=>this.props.navigation.navigate('Personal')
                },
                {
                    title: 'My Friends',
                    color: '#f2a11b',
                    icon: 'ios-people'
                },
                {
                    title: 'Language',
                    color: 'white',
                    icon: 'ios-flag'
                },
                {
                    title: 'Contact',
                    color: '#c411e0',
                    icon: 'ios-help-circle-outline'
                },
                {
                    title: 'Logout',
                    color: '#d7021f',
                    icon: 'ios-exit-outline',
                    last: true,
                    onPress: () => {
                        AsyncStorage.removeItem('token')
                        AsyncStorage.removeItem('email')
                        AsyncStorage.removeItem('id')
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                        this.props.mainStore.authPass = false
                        this.props.mainStore.needLogin = true
                    }
                }
            ]
        }
    }

    renderRow(data) {
        let rows = data.map((b, i) => {
            return (
                <TouchableOpacity onPress={b.onPress} key={i} style={[styles.row, {borderBottomWidth: b.last ? 1 : 0}]}>
                    <View style={styles.iconContainer}>
                        <Icon name={b.icon} type="ionicon" size={27} color={b.color} />
                    </View>
                    <View style={styles.rowTextContainer}>
                        <Text style={styles.rowText}>{b.title}</Text>
                    </View>
                    <View style={styles.chevRight}>
                        <Icon name="ios-arrow-forward" type="ionicon" size={22} color='rgba(255,255,255,0.3)' />
                    </View>
                </TouchableOpacity>
            )
        })
        return rows
    }

    render() {
        return (
            <LinearGradient
                colors={['#102037','#1e3353']}
                style={styles.container}
            >
                <View style={styles.topContainer}>
                    <View style={styles.leftSideTop}>
                        <Image
                            style={styles.me}
                            source={require('../../assets/thomas.jpg')}
                        />
                    </View>
                    <View style={styles.rightSideTop}>
                        <Text style={styles.name}>Thomas Charlesworth</Text>
                        <Text style={styles.userType}>Participant</Text>
                        <Text style={styles.userType}>Joined 21st December 2016</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrolLView}>
                    {this.renderRow(this.state.rows)}
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65,
        backgroundColor: '#11243c'
    },
    rowText: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    iconContainer: {
        flex: 0.1,
        alignItems: 'flex-start'
    },
    rowTextContainer: {
        flex: 0.6
    },
    chevRight: {
        flex: 0.3,
        alignItems: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)'
    },
    scrolLView: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
    },
    userType: {
        color: 'gray',
        backgroundColor: 'transparent',
        fontSize: 15,
        marginTop: 5
    },
    name: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 20
    },
    me: {
        height: 130,
        width: 130,
        borderRadius: 65
    },
    topContainer: {
        flexDirection: 'row'
    },
    leftSideTop: {
        flex: 0.4,
        alignItems: 'flex-end'
    },
    rightSideTop: {
        flex: 0.6,
        paddingLeft: 10
    }
});
