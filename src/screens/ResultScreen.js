import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

const ResultScreen = ({ navigation }) => {
    
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult();
    }, [])

    if (!result) {
        return <Text>Loading.</Text>
    }

    return (
        <View style={container.style}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return ( 
                        <Image
                            source={{uri: item}}
                            style={styles.image}    
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    image: {
        height: 200,
        width: 300,
    },
});

export default ResultScreen;