import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import MaterialCard from '../components/MaterialCard';

export default class SearchResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };

        fetch('https://stg.lms.inlead.ws/naesbib/search?query=%22jo%20nesb%C3%B8%22&availableFacets&availableOnly&withMeta&withHoldings')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState(previousState => (
                    { data: responseJson }
                ))
            })
            .catch((error) => {
                Alert.alert('Error!', 'Plese check internet connection')
            });
    }
    render() {
        if (this.state.data) {
            if (!this.state.data.objects || this.state.data.objects.length < 1) {
                content = <View>
                    <Text>Result is empty</Text>
                </View>
            } else {
                content = <FlatList
                    data={this.state.data.objects}
                    renderItem={
                        ({item}) => <MaterialCard item={item}/>
                    }
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                />
            }
        } else {
            content = <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View>
                <View style={{ height: 50 }}>
                    <AppHeader/>
                </View>
                {content}
            </View>
        )
    }
};
