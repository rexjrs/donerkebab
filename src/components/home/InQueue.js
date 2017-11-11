import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

export default class InQueue extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.widthValue = new Animated.Value(0)
    }

    componentWillReceiveProps(nextProps){
        this.animateBar(nextProps.progress)
    }
    

    animateBar(value){
        if(value <= 1){
            Animated.timing(
                this.widthValue,
                {
                    toValue: value,
                    duration: 250,
                    delay: 0
                }
            ).start()
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                {this.props.desc !== '' && 
                    <Text style={styles.desc}>{this.props.desc}</Text>
                }
                <View style={styles.progressBar}>
                    <Animated.View style={[styles.progressBarInner,{flex: this.widthValue}]}></Animated.View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: 'transparent',
    },
    desc: {
        color: 'rgba(255,255,255,0.5)',
        marginLeft: 10,
        marginBottom: 3
    },
    progressBar: {
        height: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        flexDirection: 'row'
    },
    progressBarInner: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5
    }
})