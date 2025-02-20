import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "expo-router";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { Business } from "../types/yelpInfo";

const SearchScreen = () => {
    const [term, setTerm] = useState<string>('');
    const [searchApi, results, errorMessage] = useResults();

    type priceType = '$' | '$$' | '$$$' | '$$$$';
    const filterResultsByPrice = (price: priceType): Business[] => {
        return results.filter((result) => {
            return result.price == price;
        });
    };

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            title: "Business Search",
        })
    }, []);

    return (
        <View>
            <Text style={styles.header}>Search Screen</Text>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => {
                    searchApi(term);
                }}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results!</Text>
            <ScrollView>
                <ResultsList businesses={filterResultsByPrice('$')} title="Cost Effective ($)" />
                <ResultsList businesses={filterResultsByPrice('$$')} title="Bit Pricier ($$)" />
                <ResultsList businesses={filterResultsByPrice('$$$')} title="Big Spender ($$$)" />
                <ResultsList businesses={filterResultsByPrice('$$$$')} title="Insanity ($$$$)" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 23
    }
});

export default SearchScreen;