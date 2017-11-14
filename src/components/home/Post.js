import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';

export default class Post extends React.PureComponent {
  getTime(datestring, units) {
    const diff = moment.duration(moment().diff(moment(datestring)));
    switch (units) {
      case 'days':
        return diff.asDays();
      case 'minutes':
        return diff.asMinutes();
      case 'hours':
        return diff.asHours();
      case 'seconds':
        return diff.asSeconds();
      default:
        return diff.asMinutes();
    }
  }

  render() {
    const today = moment();
    let date = this.props.item.date;
    let type = 'seconds';
    if (today.diff(date, 'days') > 5) {
      date = moment(date).local().format('DD MMM YYYY, h:mm a');
    }
    if (today.diff(date, 'days') < 5) {
      type = 'days';
    }
    if (this.getTime(date, 'hours') < 24) {
      type = 'hours';
    }
    if (this.getTime(date, 'minutes') < 60) {
      type = 'minutes';
    }
    if (this.getTime(date, 'seconds') < 60) {
      type = 'seconds';
    }
    date = `${parseInt(this.getTime(date, type), 10)} ${type} ago`;
    
    return (
      <View
        style={styles.container}
      >
        <View style={styles.top}>
          <Image source={{ uri: this.props.item.userData.image }} style={styles.profile} />
          <Text style={styles.title}>{`${this.props.item.userData.firstName}${this.props.item.userData.lastName}`}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{this.props.item.description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: this.props.item.image }} style={styles.image} />
        </View>
        <TouchableOpacity style={styles.commentsContainer}>
          <View style={styles.timeFlex}>
            <Text style={styles.title}>{date}</Text>
          </View>
          <View style={styles.commentFlex}>
            <Text style={styles.title}>Comments (12)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  timeFlex: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  commentFlex: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  descriptionContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
  },
  description: {
    color: 'rgba(255,255,255,0.5)',
  },
  commentsContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  imageContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
    height: 180,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  top: {
    justifyContent: 'flex-start',
    margin: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    backgroundColor: '#243c5e',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});
