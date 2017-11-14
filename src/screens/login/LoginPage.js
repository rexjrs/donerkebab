import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Dimensions,
    LayoutAnimation,
    AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';
import Spinner from 'react-native-spinkit';
import LinearGradient from 'react-native-linear-gradient';
import { getUserData } from '../../../src/network/Firebase';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggingIn: false,
            email: '',
            password: '',
            emailPass: false,
            passwordPass: false
        }
        this.login = this.login.bind(this)
        this.verifyFields = this.verifyFields.bind(this)
    }

    login() {
        if (!this.verifyFields()) {
            return false
        }
        this.loggingIn(true, false)
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                user.getIdToken().then((token) => {
                    AsyncStorage.setItem('token', token);
                    AsyncStorage.setItem('email', this.state.email);
                    this.props.navigation.state.params.fetchUser(token,this.state.email);
                });
            })
            .catch((err) => {
                this.loggingIn(false, true)
            });
    }

    loggingIn(status, error) {
        const loginState = {
            loggingIn: status,
            errorLogin: error
        }
        this.setState(loginState)
    }

    verifyFields() {
        let conditions = {
            emailPass: false,
            passwordPass: false
        }
        if (this.state.email === '') {
            conditions.emailPass = true
        }
        if (this.state.password === '') {
            conditions.passwordPass = true
        }
        this.setState(conditions)
        if (!conditions.emailPass && !conditions.passwordPass) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <ScrollView style={styles.scrollView} scrollEnabled={false}>
                    <View style={[styles.centerItems]}>
                        <TextInput
                            style={[styles.desc, this.state.emailPass ? styles.error : null]}
                            placeholder='Email'
                            placeholderTextColor='rgba(170,170,170,0.9)'
                            value={this.state.email}
                            onChangeText={(val) => this.setState({ email: val })}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <TextInput
                            style={[styles.desc, this.state.passwordPass ? styles.error : null]}
                            placeholder='Password'
                            placeholderTextColor='rgba(170,170,170,0.9)'
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(val) => this.setState({ password: val })}
                        />
                        {this.state.loggingIn &&
                            <View style={styles.centerSpinner}>
                                <Spinner isVisible={true} type="9CubeGrid" size={40} color="white" />
                            </View>
                        }
                        {!this.state.loggingIn &&
                            <TouchableOpacity onPress={this.login} style={styles.submitBtn}>
                                <Text style={styles.submitText}>Login</Text>
                            </TouchableOpacity>
                        }
                        {this.state.errorLogin &&
                        <View style={styles.errorLogin}>
                            <Text style={styles.errorText}>Email or password was incorrect</Text>
                        </View>
                        }
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorLogin: {
        marginTop: 10,
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        backgroundColor: 'transparent'
    },
    error: {
        borderColor: 'red',
        borderWidth: 1
    },
    centerSpinner: {
        alignItems: 'center',
        marginTop: 10
    },
    scrollView: {
        flex: 1,
        paddingTop: (window.height / 2) - 140
    },
    submitBtn: {
        backgroundColor: '#6764fe',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 10
    },
    submitText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontWeight: '700',
        fontSize: 20
    },
    desc: {
        color: 'white',
        borderRadius: 20,
        height: 40,
        marginHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#122333',
        marginTop: 10,
        textAlign: 'center'
    },
});
