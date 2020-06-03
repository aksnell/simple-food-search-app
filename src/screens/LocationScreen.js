import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { withNavigation } from 'react-navigation';

import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';

import useLocation from '../hooks/useLocation';
import useImage from '../hooks/useImage';

const scrWidth = Math.round(Dimensions.get('window').width)
const scrHeight =Math.round(Dimensions.get('window').height)

const LocationScreen = ({ navigation }) => {

    [getRandomImage, image] = useImage();
    [results, duration, err] = useLocation();

    const [text, setText] = useState('');
    

    if (!results.length) {
        return <Loading text="LOADING THIS NONSENSE"/>
    }

    return (
        <ImageBackground 
            style={styles.container}
            source={{uri: image}}
        >
            <View style={styles.search}>
            <Text style={styles.title}>WHERE U IS?</Text>
            <SearchBar
                initial={results}
                text={text} 
                onTextChange={setText}
                onTextSubmit={() => navigation.navigate('Search', text.length ? {address: text} : {address: results})}
            />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    search: {
        bottom: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: '#000',
    },
    image: {
        height: scrHeight + 20,
        width: scrWidth + 20,
    }
});

export default withNavigation(LocationScreen);