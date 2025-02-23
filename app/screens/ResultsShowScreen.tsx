import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import BusinessDetails from '../types/businessDetail';

const ResultsShowScreen = () => {
    const [result, setResult] = useState<BusinessDetails>();
    const { id } = useLocalSearchParams<{ id: string }>();

    const getResult = async (id: string) => {
        const response = await yelp.get<BusinessDetails>(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyles}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyles: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;
