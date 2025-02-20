import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Business } from '../types/yelpInfo';
import ResultsDetail from './ResultsDetail';

interface ResultsProps {
    title: string;
    businesses: Business[];
}

const ResultsList = (props: ResultsProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.businesses}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail business={item} />;
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
