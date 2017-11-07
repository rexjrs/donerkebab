import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
    TouchableWithoutFeedback
} from 'react-native';
import List from '../components/home/List';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            showBtn: true,
            foodBtn: 10,
            exerciseBtn: 20
        }
    }

    navigate(page){
        this.props.navigation.navigate('AddPost', {name: page})
        this.showBtn(!this.state.showBtn, true)
    }

    showBtn(value, noAnimation){
        let foodBtn = 10
        let exerciseBtn = 20
        let type = 'easeInEaseOut'        
        if(!value){
            foodBtn = 70
            exerciseBtn = 75
            type = 'spring'
        }
        if(!noAnimation){
            LayoutAnimation.configureNext(LayoutAnimation.Presets[type]);                    
        }
        this.setState({
            foodBtn: foodBtn,
            exerciseBtn: exerciseBtn,
            showBtn: value
        })
    }

    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <List screenProps={this.props.screenProps}/>
                <TouchableOpacity onPress={() => this.navigate('Log Meal')} style={[styles.foodBtn, {bottom: this.state.foodBtn}]}>
                    <Icon name="ios-restaurant" type="ionicon" size={35} color="#6764fe" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Log Exercise')} style={[styles.exerciseBtn, {right: this.state.exerciseBtn}]}>
                    <Icon name="ios-walk" type="ionicon" size={40} color="#6764fe" />
                </TouchableOpacity>
                <View style={styles.plusBtn}>
                    <TouchableWithoutFeedback onPress={()=>this.showBtn(!this.state.showBtn)}>
                    <Icon name="ios-add-circle" type="ionicon" size={50} color="#6764fe" />
                    </TouchableWithoutFeedback>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11243c',
        paddingTop: 20
    },
    plusBtn: {
        backgroundColor: 'white',
        width: 52,
        height: 52,
        borderRadius: 26,
        position: 'absolute',
        bottom: 10,
        right: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4
    },
    foodBtn: {
        backgroundColor: 'white',
        width: 42,
        height: 42,
        borderRadius: 21,
        position: 'absolute',
        bottom: 65,
        right: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseBtn: {
        backgroundColor: 'white',
        width: 42,
        height: 42,
        borderRadius: 21,
        position: 'absolute',
        bottom: 10,
        right: 75,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
