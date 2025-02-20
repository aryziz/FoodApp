import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Router, useRouter } from 'expo-router';

export default function Index() {
    const router: Router = useRouter();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <TouchableOpacity
                onPress={() => router.push('/screens/SearchScreen')}
                accessibilityRole="button"
            >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
}
