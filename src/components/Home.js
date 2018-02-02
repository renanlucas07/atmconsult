import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';
import NavBar from './NavBar';
import styles from '../Styles/styles';
import * as Images from '../images/images';

export default class Home extends Component {
    render() {
        const {
            navBar,
            navBarText,
            home,
            menu,
            image
        } = styles;

        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <StatusBar
                    backgroundColor='#CCC'
                />
                <NavBar />
                <View style={home}>
                    <Image style={{marginTop: 20}} source={Images.LOGO} />
                
                    <View style={menu}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={ () => {
                                this.props.navigate('Clients');
                            }}
                        >
                            <Image style={image} source={Images.MENU_CLIENTE} />
                        </TouchableHighlight>
                        <Image style={image} source={Images.MENU_CONTATO} />
                    </View>
                    <View style={menu}>
                        <Image style={image} source={Images.MENU_EMPRESA} />
                        <Image style={image} source={Images.MENU_SERVICO} />
                    </View>
                </View>
            </View>
        );
    }
}