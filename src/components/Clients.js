import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import NavBar from './NavBar';
import styles from '../Styles/styles';
import * as Images from '../images/images';

export default class Clients extends Component {
    render() {
        const {
            navBar,
            navBarText,
            menu,
            image,
            clientsLogo,
            clientsTitle,
            clients,
            clientsDescription
        } = styles;

        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <StatusBar
                    backgroundColor='#B9C941'
                />
                <NavBar backBtn goBack={this.props.goBack} backgroundColor='#B9C941'/>
                <View style={clientsLogo}>
                    <Image source={Images.DETALHE_CLIENTE} />
                    <Text style={clientsTitle}>Nossos Clientes</Text>
                </View>
                <View style={clients}>
                    <Image style={image} source={Images.CLIENTE1} />
                    <Text style={clientsDescription}>Descrição do cliente 1.</Text>
                    <Image style={image} source={Images.CLIENTE2} />
                    <Text style={clientsDescription}>Descrição do cliente 2.</Text>
                </View>
            </View>
        );
    }
}