import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMes]  = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( results => {
            return results.price === price;
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMes? <Text>{errorMes}</Text> : null}
            <ScrollView>
                <ResultList 
                    results={filterResultsByPrice('$')} 
                    title="$"
                />
                <ResultList 
                    results={filterResultsByPrice('$$')}
                    title="$$"
                />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title="$$$"
                />
                <ResultList 
                    results={filterResultsByPrice('$$$$')}
                    title="$$$$"
                />
            </ScrollView>
        </View>
    )
}

export default SearchScreen;