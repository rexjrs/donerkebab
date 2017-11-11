import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-elements';

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'Breakfast',
            description: '',
            cals: '',
            image: null
        }
        this.submitPost = this.submitPost.bind(this)
    }

    componentWillMount() {
        if (this.props.navigation.state.params.name === 'Log Exercise') {
            this.setState({
                type: 'Exercise'
            })
        }
    }


    submitPost() {
        let data = {
            type: this.state.type,
            description: this.state.description,
            image: this.state.image,
            path: this.state.imagePath,
            mime: this.state.mime,
            cals: this.state.cals
        }
        this.props.navigation.state.params.queueUpload(data)
        this.props.navigation.goBack()
    }

    changeType(type) {
        this.setState({
            type: type
        })
    }

    getImage(type) {
        switch (type) {
            case ('camera'):
                ImagePicker.openCamera({
                    includeBase64: true,
                    compressImageMaxHeight: 1000,
                    compressImageMaxWidth: 2000,
                    compressImageQuality: 0.75
                }).then(image => {
                    this.setState({
                        mime: image.mime,
                        image: image.data,
                        imagePath: image.path
                    })
                });
                break;
            case ('gallery'):
                ImagePicker.openPicker({
                    includeBase64: true,
                    compressImageMaxHeight: 1000,
                    compressImageMaxWidth: 2000,
                    compressImageQuality: 0.75
                }).then(image => {
                    this.setState({
                        mime: image.mime,
                        image: image.data,
                        imagePath: image.path
                    })
                });
                break;
            default:
                ImagePicker.openCamera({
                    includeBase64: true,
                    compressImageMaxHeight: 1000,
                    compressImageMaxWidth: 2000,
                    compressImageQuality: 0.75
                }).then(image => {
                    this.setState({
                        mime: image.mime,
                        image: image.data,
                        imagePath: image.path
                    })
                });
                break;
        }
    }

    render() {
        let type = 'Meal'
        let desc = 'What did you eat?'
        if (this.props.navigation.state.params.name === 'Log Exercise') {
            type = 'Exercise'
            desc = 'What did you do?'
        }
        return (
            <LinearGradient
                colors={['#102037', '#1e3353']}
                style={styles.container}
            >
                <ScrollView>
                    {this.state.image &&
                        <View style={styles.imageContainer}>
                            <Image source={{uri: `data:${this.state.mime};base64,`+ this.state.image}} style={styles.image} resizeMode="cover"/>
                        </View>
                    }
                    {!this.state.image &&
                        <View style={styles.imageContainer}>
                            <TouchableOpacity onPress={() => this.getImage('gallery')} style={styles.imageButtons}>
                                <Icon type="ionicon" name="ios-images" size={40} color="gray" />
                                <Text>Select from Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.getImage('camera')} style={styles.imageButtons}>
                                <Icon type="ionicon" name="ios-camera" size={40} color="gray" />
                                <Text>Take a picture</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    <TextInput
                        style={styles.desc}
                        placeholder={desc}
                        placeholderTextColor='rgba(170,170,170,0.9)'
                        value={this.state.description}
                        onChangeText={(val) => this.setState({ description: val })}
                    />
                    {this.props.navigation.state.params.name === 'Log Exercise' &&
                        <TextInput
                            style={styles.calsBurned}
                            placeholder="Calories burned"
                            placeholderTextColor='rgba(170,170,170,0.9)'
                            keyboardType="number-pad"
                            value={this.state.cals}
                            onChangeText={(val) => this.setState({ cals: val })}
                        />
                    }
                    {this.props.navigation.state.params.name !== 'Log Exercise' &&
                        <TextInput
                            style={styles.cals}
                            placeholder="Calories"
                            placeholderTextColor='rgba(170,170,170,0.9)'
                            keyboardType="number-pad"
                            value={this.state.cals}
                            onChangeText={(val) => this.setState({ cals: val })}
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
                </ScrollView>
                <TouchableOpacity onPress={this.submitPost} style={styles.submitBtn}>
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
    image: {
        height: '100%',
        width: '100%'
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
        height: 220,
        margin: 10,
        flexDirection: 'row'
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
    imageButtons: {
        flex: 0.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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
