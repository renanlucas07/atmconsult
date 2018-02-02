import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#CCC',
        padding: 10,
        height: 80,
    }, 
    navBarText: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    home: {
        alignItems: 'center',
        marginTop: 20
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        margin: 15
    },
    clientsLogo: {
        flexDirection: 'row',
        margin: 20
    },
    clientsTitle: {
        color: '#B9C941',
        fontSize: 32,
        padding: 20
    },
    clients: {
        marginLeft: 25
    },
    clientsDescription: {
        marginLeft: 35
    }
});

export default styles;