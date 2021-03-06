import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Spinner from 'react-native-spinkit';
import { getFeed } from '../../network/Firebase';
import Post from './Post';

@inject('mainStore')
@observer export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      initialLoad: true,
      refreshing: false,
      getData: 0,
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getData !== this.state.getData) {
      this.getData();
      this.setState({ getData: nextProps.getData });
    }
  }


  getData() {
    this.setState({
      refreshing: true,
    });
    getFeed(this.props.screenProps.db, this.props.mainStore.userData.id, (status, res) => {
      const tempArray = [];
      let counter = 0;
      if (res.docs.length === 0) {
        this.setState({
          initialLoad: false,
          refreshing: false,
        });
      }
      res.forEach((doc) => {
        // console.log(doc.data().date)
        const tempObj = {
          calories: doc.data().calories,
          date: doc.data().date,
          description: doc.data().description,
          image: doc.data().image,
          type: doc.data().type,
          userId: doc.data().userId,
        };
        doc.data().user
          .get()
          .then((querySnapshot) => {
            tempObj.userData = {
              email: querySnapshot.data().email,
              firstName: querySnapshot.data().firstName,
              lastName: querySnapshot.data().lastName,
              image: querySnapshot.data().image,
            };
            tempArray.push(tempObj);
            counter += 1;
            if (counter === res.docs.length) {
              this.setState({
                dataSource: tempArray,
                initialLoad: false,
                refreshing: false,
              });
            }
          });
      });
    });
  }


  renderRow = ({ item }) => {
    return (
      <Post item={item} />
    );
  }

  render() {
    if (this.state.initialLoad) {
      return (
        <View style={styles.spinner}>
          <Spinner isVisible type="9CubeGrid" size={40} color="white" />
        </View>
      );
    }
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

const styles = StyleSheet.create({
  spinner: {
    marginTop: 30,
    alignItems: 'center',
  },
});
