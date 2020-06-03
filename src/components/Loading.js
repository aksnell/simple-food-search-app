import React from 'react';
import {Text, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ text, image }) => {
    return (
        <ImageBackground 
            style={styles.container}
            source = {{uri: image}}
        >
            <ActivityIndicator size="large" color="blue" style={styles.icon}/>
            <Text style={styles.text}>{text}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    text: {
        alignSelf: 'center',
    }
});

export default Loading;