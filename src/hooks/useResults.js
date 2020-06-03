import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [err, setErr] = useState('');

    const searchApi = async (searchTerm, location) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                   limit: 50,
                   term: searchTerm,
                   location: location, 
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErr('Something went wrong!');
        };
    };

    return [searchApi, results, err];
};