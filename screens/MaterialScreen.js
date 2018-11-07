import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import RenderRow from '../components/RenderRow';

export default class MaterialScreen extends Component {
    render() {
        let item = this.props.navigation.state.params.item;
        let image = this.props.navigation.state.params.image;

        return (
            <View style={styles.container}>
                <View style={{ height: 50 }}>
                    <AppHeader />
                </View>
                <ScrollView>
                    <View style={styles.coverWrapp}>
                        <Image style={styles.cover} source={image} />
                    </View>
                    <RenderRow propName='Title' value={item.title}/>
                    <RenderRow propName='Author' value={item.author}/>
                    <RenderRow propName='year' value={item.year}/>
                    <RenderRow propName='type' value={item.type}/>
                    <RenderRow propName='description' value={item.description}/>
                    <RenderRow propName='faustNumber' value={item.faustNumber}/>
                </ScrollView>
            </View>
        )
    }
};



const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    coverWrapp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cover: {
        height: 280,
        width: 200
    }
});
