import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

interface SearchBarProps {
    term: string;
    onTermChange: (newTerm: string) => void;
    onTermSubmit: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle} testID="search-icon" />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                style={styles.inputStyle}
                value={props.term}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
                testID='searchInput'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;