import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer 83MIAcmRh7spjPwqI3iKqEdbWz1Ch-0l7FYUVuXP92W2s5HybyzZv-leM2d4_uCW97ZS5orzCm6IEjTKfFh5fyHPx76qw8TmnGakJRl2sSlLxi579XeUSK6o7jSTXXYx',
    }
})