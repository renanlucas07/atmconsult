import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
    } from 'react-native';
import styles from '../Styles/styles';
import * as Images from '../images/images';

export default class NavBar extends Component {
    render() {
        const {
            navBar,
            navBarText,
            image
        } = styles;

        if (this.props.backBtn) {
            return (
                <View style={[navBar, { backgroundColor: this.props.backgroundColor }]}>
                    <TouchableHighlight
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                        onPress={ () => {
                            this.props.goBack();
                        }}
                    >
                        <Image 
                            style={image}
                            source={Images.BTN_VOLTAR}
                        />
                    </TouchableHighlight>
                    <Text style={[navBarText, {marginLeft: 0}]}>ATM Consultoria</Text>
                </View>
            );
        }

        return (
            <View style={navBar}>
                <Text style={navBarText}>ATM Consultoria</Text>
            </View>
        );
    }
}