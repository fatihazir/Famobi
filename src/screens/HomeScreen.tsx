import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

function HomeScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomeScreen;
