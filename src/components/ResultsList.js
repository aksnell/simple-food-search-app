﻿import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultDetail from './ResultDetail.js';

const ResultsList = ({ title, results, navigation }) => {
    
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Result', { id: item.id })
                            }}    
                        >
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        color: 'white',
    },
    container: {
        borderRadius: 5,
        marginLeft: 15,
        marginBottom: 10,
    }
})

export default withNavigation(ResultsList);