import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import AppHeader from '../components/AppHeader';
import RenderRow from '../components/RenderRow';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 50 }}>
                    <AppHeader />
                </View>
                <ScrollView>
                    <RenderRow propName='Full' value='User Name'/>
                    <RenderRow propName='Zip' value='2400'/>
                    <RenderRow propName='Email' value='jh@inlead.dk'/>
                    <RenderRow propName='City' value='København NV'/>
                    <RenderRow propName='Street and number' value='Rentemestervej 56C'/>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text>Phone:</Text>
                        </View>
                        <View style={styles.column}>
                        <TextInput style={{height: 40}} placeholder="30320260" />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text>Email:</Text>
                        </View>
                        <View style={styles.column}>
                        <TextInput style={{height: 40}} placeholder="test@inlead.dk" />
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
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
