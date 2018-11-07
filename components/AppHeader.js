import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class AppHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback style={styles.button} onPress={() => this.props.navigation.navigate('MenuScreen')}>
                    <Image
                        source={require('../assets/images/menu-button.png')}
                        style={styles.image}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Title</Text>
                </View>
            </View>
        );
    }
};

export default withNavigation(AppHeader);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        width: 50,
        backgroundColor: 'powderblue'
    },
    title: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 50,
        textAlign: 'center'
    },
    image: {
        width: 32,
        height: 32,
        margin: 9
    }
});
