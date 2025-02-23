import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Business } from '../types/yelpInfo';
import ResultsDetail from './ResultsDetail';
import { useRouter } from 'expo-router';

interface ResultsProps {
    title: string;
    businesses: Business[];
}

const ResultsList = (props: ResultsProps) => {
    const router = useRouter();

    if (!props.businesses.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.businesses}
                keyExtractor={(result) => result.id}
                testID="business-list"
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                router.push({
                                    pathname: '/screens/ResultsShowScreen',
                                    params: { id: item.id }
                                })
                            }
                        >
                            <ResultsDetail business={item} />
                        </TouchableOpacity>
                    );
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
