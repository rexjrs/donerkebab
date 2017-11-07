import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import Post from './Post';
import Spinner from 'react-native-spinkit';
import { Icon } from 'react-native-elements';
import { getFeed } from '../../network/Firebase';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            initialLoad: true,
            refreshing: false
        }
        this.getData = this.getData.bind(this)
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        this.setState({
            refreshing: true
        })
        getFeed(this.props.screenProps.db, this.props.mainStore.userData.id, (status, res) => {
            let tempArray = []
            let counter = 0
            res.forEach((doc) => {
                let tempObj = {
                    calories: doc.data().calories,
                    date: doc.data().date,
                    description: doc.data().description,
                    //image: doc.data().image,
                    type: doc.data().type,
                    userId: doc.data().userId
                }
                doc.data().user
                    .get()
                    .then((querySnapshot) => {
                        tempObj.userData = {
                            email: querySnapshot.data().email,
                            firstName: querySnapshot.data().firstName,
                            lastName: querySnapshot.data().lastName,
                            //image: querySnapshot.data().image
                        }
                        tempArray.push(tempObj)
                        counter = counter + 1
                        if (counter === res.docs.length) {
                            console.log(JSON.parse(JSON.stringify(tempArray)))
                            this.setState({
                                dataSource: JSON.parse(JSON.stringify(tempArray)),
                                initialLoad: false,
                                refreshing: false
                            })
                        }
                    })
            });
        })
    }


    renderRow = ({ item }) => {
        return (
            <Post item={item} />
        )
    }

    render() {
        if (this.state.initialLoad) {
            return (
                <View style={styles.spinner}>
                    <Spinner isVisible={true} type="9CubeGrid" size={40} color="white" />
                </View>
            )
        } else {
            return (
                <FlatList
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={(_, i) => i}
                    renderItem={(item) => this.renderRow(item)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getData}
                        />
                    }
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    spinner: {
        marginTop: 30,
        alignItems: 'center'
    }
});
