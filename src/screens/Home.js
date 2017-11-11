import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    LayoutAnimation,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import { createPost } from '../network/Firebase';
import List from '../components/home/List';
import InQueue from '../components/home/InQueue';

@inject('mainStore')
@observer export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showBtn: true,
            foodBtn: 10,
            exerciseBtn: 20,
            inQueue: [],
            getData: 0
        }
        this.queueUpload = this.queueUpload.bind(this)
    }

    queueUpload(data) {
        let id = moment().format('mmssa')
        let queueArray = JSON.parse(JSON.stringify(this.state.inQueue))
        queueArray.push({
            id: id,
            desc: data.description,
            progress: 0
        })
        this.setState({
            inQueue: queueArray
        })
        const imageRef = this.props.screenProps.storage.child("images/" + this.props.mainStore.userData.id + moment().format('YYYYMMDDhmmss') + ".jpg")
        createPost(
            this.props.screenProps.db,
            this.props.screenProps.db.collection('users').doc(this.props.mainStore.userData.id),
            this.props.screenProps.timestamp,
            data,
            this.props.mainStore.userData.id,
            imageRef,
            (progress) => {
                let tempArray = JSON.parse(JSON.stringify(this.state.inQueue))
                tempArray.map((b, i) => {
                    if (b.id === id) {
                        b.progress = progress
                    }
                })
                this.setState({
                    inQueue: tempArray
                })
            },
            (result) => {
                let tempArray = JSON.parse(JSON.stringify(this.state.inQueue))
                let index;
                tempArray.map((b, i) => {
                    if (b.id === id) {
                        index = i
                    }
                })
                tempArray.splice(index, 1)
                this.setState({
                    inQueue: tempArray,
                    getData: this.state.getData+1
                })
            }
        )
    }

    navigate(page) {
        this.props.navigation.navigate('AddPost', {
            name: page,
            queueUpload: this.queueUpload
        })
        this.showBtn(!this.state.showBtn, true)
    }

    showBtn(value, noAnimation) {
        let foodBtn = 10
        let exerciseBtn = 20
        let type = 'easeInEaseOut'
        if (!value) {
            foodBtn = 70
            exerciseBtn = 75
            type = 'spring'
        }
        if (!noAnimation) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets[type]);
        }
        this.setState({
            foodBtn: foodBtn,
            exerciseBtn: exerciseBtn,
            showBtn: value
        })
    }

    renderQueue(data) {
        let mapped = data.map((b, i) => {
            return (
                <InQueue
                    key={i}
                    desc={b.desc}
                    progress={b.progress}
                />
            )
        })
        return mapped
    }

    render() {
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                {this.renderQueue(this.state.inQueue)}
                <List screenProps={this.props.screenProps} getData={this.state.getData}/>
                <TouchableOpacity onPress={() => this.navigate('Log Meal')} style={[styles.foodBtn, { bottom: this.state.foodBtn }]}>
                    <Icon name="ios-restaurant" type="ionicon" size={35} color="#6764fe" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigate('Log Exercise')} style={[styles.exerciseBtn, { right: this.state.exerciseBtn }]}>
                    <Icon name="ios-walk" type="ionicon" size={40} color="#6764fe" />
                </TouchableOpacity>
                <View style={styles.plusBtn}>
                    <TouchableWithoutFeedback onPress={() => this.showBtn(!this.state.showBtn)}>
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
