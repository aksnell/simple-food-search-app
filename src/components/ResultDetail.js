import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.details}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 3,
    },
    details: {
        marginLeft: 5,
        color: 'lightgrey',
        fontSize: 10,
        marginBottom: 3,
    },
    container: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 5,
        margin: 3,
    }
});

export default ResultDetail;