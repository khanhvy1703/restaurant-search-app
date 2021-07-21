import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMes, setErrorMes] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMes('Something went wrong');
        }
    }

    // Call searchApi when component is first render
    //searchApi('pasta');
    useEffect(() => {
        searchApi('lobster');
    }, [])

    return [searchApi, results, errorMes];
};