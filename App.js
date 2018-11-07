import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import SearchResultScreen from './screens/SearchResultScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import MaterialScreen from './screens/MaterialScreen';


const AppNavigator = createStackNavigator({
    SearchResultScreen: { screen: SearchResultScreen },
    ProfileScreen: { screen: ProfileScreen },
    MenuScreen: { screen: MenuScreen },
    MaterialScreen: { screen: MaterialScreen }
}, {
    headerMode: 'none'
});

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row'
    },
});
