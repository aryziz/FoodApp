import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Business } from '../types/yelpInfo';

interface ResultsDetailProps {
    business: Business;
}

const ResultsDetail: React.FC<ResultsDetailProps> = (
    props: ResultsDetailProps
) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: props.business.image_url }}
            />
            <Text style={styles.name}>{props.business.name}</Text>
            <Text>
                {props.business.rating}/5 Stars, {props.business.review_count}{' '}
                Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    container: {
        marginLeft: 15
    }
});

export default ResultsDetail;
