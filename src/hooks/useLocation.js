import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import googleMaps from '../api/googleMaps';

export default () => {

    const [results, setResults] = useState('');
    const [duration, setDuration] = useState(0);
    const [err, setErr] = useState('');

    const getAddress = async (lat, lon) => {
        try {
            const start = Date.now();
            const response = await googleMaps.get('/json', {
                params: {
                   address: `${lat}, ${lon}`,
                   key: `AIzaSyAst0bJLpQTauk4numtFkV-PfxCj7hQYTk`
                },
            });
            setDuration((Date.now() - start) / 1000);
            setResults(response.data.results[0].formatted_address);
        } catch (err) {
            console.log(err);
            setErr('Something went wrong!');
        };
    };

    useEffect(() => {
        Permissions.askAsync(Permissions.LOCATION)
        .then(Location.getCurrentPositionAsync()
        .then(location => {
            getAddress(location.coords.latitude, location.coords.longitude);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        }))
    }, []);
    return [results, duration, err];
};