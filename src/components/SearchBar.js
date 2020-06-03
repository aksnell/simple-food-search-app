import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from  '@expo/vector-icons';

const SearchBar = ({ initial, text, onTextChange, onTextSubmit}) => {

    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.icon}/>
            <TextInput
                autoCapitalize='none' 
                placeholder={initial}
                style={styles.input}
                value={text}
                onChangeText={onTextChange}
                onEndEditing={onTextSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignContent: 'center',
    },
    input: {
        flex: 1,
        padding: 5,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
    }
});

export default SearchBar;