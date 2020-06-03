import React, { useState, useEffect } from 'react';
import {ImageBackground, ScrollView, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar.js';
import ResultsList from '../components/ResultsList.js';
import Loading from '../components/Loading';

import useResults from '../hooks/useResults';
import useImage from '../hooks/useImage';

const SearchScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [getRandomImage, image] = useImage();
    const [searchApi, results, err] = useResults();

    useEffect(() => {
        searchApi('pizza', navigation.getParam('address'))
    }, [])

    const filterByPrice = (price) => {
        return results.filter(result => result.price === price);
    }

    if (!image.length || !results.length) {
        return <Loading text="LOOKING FOR YOUR TRASH" image={image}/>
    }

    return (
        <ImageBackground 
            style={styles.container}
            source={{uri: image}}
        >
            <Text></Text>
            <SearchBar
                initial='Search for pasta, sushi, fast food...'
                term={text} 
                onTextChange={setText}
                onTextSubmit={() =>  searchApi(text, navigation.getParam('address'))}
            />
            <ScrollView>
                <ResultsList 
                    title='Cheap Garbage'
                    results={filterByPrice('$')}
                />
                <ResultsList 
                    title='Too Expensive'
                    results={filterByPrice('$$')}
                />
                <ResultsList 
                    title='Way Too Expensive'
                    results={filterByPrice('$$$')}
                />
                <ResultsList 
                    title='Fuck Right Off'
                    results={filterByPrice('$$$')}
                />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    resultsNumber: {
        fontSize: 10,
        marginLeft: 15,
        color: 'lightgrey',
    },
    container: {
        flex: 1,
        marginTop: 30,
    }
});

export default SearchScreen;