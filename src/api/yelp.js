import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer KGKwpNuyxT0siCk56LY8esgxa3bFtnlZqLPzSoFcVQ6HWhDC579ysn_TBFv6zKkpPJYfnT2obf4OMvrXtiiRd24uJJDEUVvbJNEvFQJxiakpgrac0xMp0DYCKjT2YHYx'
    }
});

