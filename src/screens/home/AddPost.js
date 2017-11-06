import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'Breakfast'
        }
    }

    changeType(type) {
        this.setState({
            type: type
        })
    }

    render() {
        let type = 'Meal'
        let desc = 'What did you eat?'
        if(this.props.navigation.state.params.name === 'Log Exercise'){
            type = 'Exercise'
            desc = 'What did you do?'
        }
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <ScrollView>
                    <TouchableOpacity style={styles.imageContainer}>
                        <Icon type="ionicon" name="ios-images" size={40} color="gray" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.desc}
                        placeholder={desc}
                        placeholderTextColor='rgba(170,170,170,0.9)'
                    />
                    {this.props.navigation.state.params.name === 'Log Exercise' &&
                    <TextInput
                        style={styles.calsBurned}
                        placeholder="Calories burned"
                        placeholderTextColor='rgba(170,170,170,0.9)'
                        keyboardType="number-pad"
                    />
                    }
                    {this.props.navigation.state.params.name !== 'Log Exercise' &&
                    <TextInput
                        style={styles.cals}
                        placeholder="Calories"
                        placeholderTextColor='rgba(170,170,170,0.9)'
                        keyboardType="number-pad"
                    />
                    }
                    {this.props.navigation.state.params.name !== 'Log Exercise' &&
                    <View style={styles.optionContainer}>
                        <View style={[styles.optionFlex, { alignItems: 'flex-start' }]}>
                            <TouchableOpacity onPress={() => this.changeType('Breakfast')} style={[styles.option, this.state.type !== 'Breakfast' && styles.optionDisabled]}>
                                <Text style={[styles.optionText, this.state.type !== 'Breakfast' && styles.optionTextDisabled]}>Breakfast</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.optionFlex]}>
                            <TouchableOpacity onPress={() => this.changeType('Lunch')} style={[styles.option, this.state.type !== 'Lunch' && styles.optionDisabled]}>
                                <Text style={[styles.optionText, this.state.type !== 'Lunch' && styles.optionTextDisabled]}>Lunch</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.optionFlex]}>
                            <TouchableOpacity onPress={() => this.changeType('Dinner')} style={[styles.option, this.state.type !== 'Dinner' && styles.optionDisabled]}>
                                <Text style={[styles.optionText, this.state.type !== 'Dinner' && styles.optionTextDisabled]}>Dinner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[[styles.optionFlex, { alignItems: 'flex-end' }]]}>
                            <TouchableOpacity onPress={() => this.changeType('Snack')} style={[styles.option, this.state.type !== 'Snack' && styles.optionDisabled]}>
                                <Text style={[styles.optionText, this.state.type !== 'Snack' && styles.optionTextDisabled]}>Snack</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }
                    <TouchableOpacity style={styles.date}>
                        <Text style={styles.dateText}>2017-11-04</Text>
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitText}>Add {type}</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65
    },
    optionFlex: {
        flex: 1 / 4,
        alignItems: 'center'
    },
    optionContainer: {
        flexDirection: 'row',
        padding: 10
    },
    optionDisabled: {
        backgroundColor: '#122333',
    },
    option: {
        height: 40,
        width: '95%',
        backgroundColor: '#6764fe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    optionTextDisabled: {
        color: 'rgba(170,170,170,0.9)'
    },
    optionText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold'
    },
    imageContainer: {
        backgroundColor: '#F8F8F8',
        height: 250,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        color: 'white',
        borderRadius: 20,
        height: 40,
        marginHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#122333',
        paddingLeft: 10
    },
    cals: {
        color: 'white',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
        paddingVertical: 3,
        marginTop: 10,
        width: 100,
        textAlign: 'center',
        backgroundColor: '#122333'
    },
    calsBurned: {
        color: 'white',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
        paddingVertical: 3,
        marginTop: 10,
        marginBottom: 10,
        width: 146,
        textAlign: 'center',
        backgroundColor: '#122333'
    },
    date: {
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
        width: 100,
        backgroundColor: '#122333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateText: {
        color: 'rgba(170,170,170,0.9)',
        backgroundColor: 'transparent',
    },
    submitBtn: {
        backgroundColor: '#6764fe',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontWeight: '700',
        fontSize: 20
    }
});
