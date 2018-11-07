import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

class MaterialCard extends Component {
    constructor(props) {
        super(props);
        let item = this.props.item;
        this.state = {
            image: {
                uri: 'https://stg.cover.lms.inlead.ws/naesbib/covers/' + item.faustNumber
            }
        }
    }
    onError(error){
        this.setState({ image: require('../assets/images/defaultCover.jpg') });
    }

    render() {
        let item = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MaterialScreen', { item: item, image: this.state.image })}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.cover} source={this.state.image} onError={ this.onError.bind(this) } />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>{item.title}!</Text>
                        <Text>Author: {item.author}!</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default withNavigation(MaterialCard);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 10
    },
    cover: {
        height: 140,
        width: 100,
    },
    description: {
        flex: 1,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});
