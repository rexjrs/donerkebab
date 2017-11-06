import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import MeasurementBox from '../../components/tracking/MeasurementBox';

export default class Measurements extends Component {
    render() {
        return (
            <ScrollView>
                <MeasurementBox
                    type="Neck"
                />
                <MeasurementBox
                    type="Biceps"
                />
                <MeasurementBox
                    type="Waist"
                />
                <MeasurementBox
                    type="Hips"
                />
                <MeasurementBox
                    type="Thighs"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: 'white'
    }
});
