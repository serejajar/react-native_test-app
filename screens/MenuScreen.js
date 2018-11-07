import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class MenuScreen extends Component {
    render() {
        return (
            <View>
                <View style={{ height: 50 }}>
                    <AppHeader />
                </View>
                <View>
                    <Button onPress={() => this.props.navigation.navigate('ProfileScreen')} title="Profile"/>
                    <Button onPress={() => this.props.navigation.navigate('SearchResultScreen')} title="Search Result"/>
                </View>
            </View>
        )
    }
};
