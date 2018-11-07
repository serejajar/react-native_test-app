import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class RenderRow extends Component {
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>{this.props.propName}:</Text>
                </View>
                <View style={styles.column}>
                    <Text>{this.props.value}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        padding: 10
    },
    column: {
        flex: 1,
        alignSelf: 'stretch'
    }
});
