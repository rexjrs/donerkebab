import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    Dimensions,
    LayoutAnimation
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class MainPage extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.login = this.login.bind(this)
    }

    login(){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear); 
        this.props.mainStore.authPass = true
    }

    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <ScrollView style={styles.scrollView} scrollEnabled={false}>
                <View style={styles.centerItems}>
                    <TextInput
                        style={styles.desc}
                        placeholder='Email'
                        placeholderTextColor='rgba(170,170,170,0.9)'
                    />
                    <TextInput
                        style={styles.desc}
                        placeholder='Password'
                        placeholderTextColor='rgba(170,170,170,0.9)'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={this.login} style={styles.submitBtn}>
                        <Text style={styles.submitText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleBtn}>
                        <Text style={styles.submitText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.facebookBtn}>
                        <Text style={styles.submitText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.needAcc}>
                        <Text style={styles.needAccText}>Need an account?</Text>
                    </TouchableOpacity>
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
    scrollView: {
        flex: 1,
        paddingTop: (window.height/2)-140
    },
    centerItems: {
    },
    needAccText: {
        color: 'white',
        fontWeight: '600'
    },
    needAcc: {
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'transparent'
    },
    googleBtn: {
        backgroundColor: '#df4a33',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 10
    },
    facebookBtn: {
        backgroundColor: '#425dae',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 10
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
