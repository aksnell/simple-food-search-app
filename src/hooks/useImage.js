import { useEffect, useState } from 'react';
import { Dimensions } from "react-native";
import picsum from '../api/picsum';

export default () => {

    const [image, setImage] = useState('');
    const [duration, setDuration] = useState(0);
    const [err, setErr] = useState('');

    const getRandomImage = async (h, w) => {
        try {
            const start = Date.now();
            const response = await picsum.get(`/${h}/${w}`, {
                params: {
                    blur: 10,
                }
            });
            setDuration((Date.now() - start) / 1000);
            setImage(response.request.responseURL);
        } catch (err) {
            console.log(err)
            setErr('Something went wrong!');
        };
    };

    useEffect(() => {
        getRandomImage(Math.round(Dimensions.get('window').width), Math.round(Dimensions.get('window').height));
    }, []);

    return [getRandomImage, image, duration, err];
};