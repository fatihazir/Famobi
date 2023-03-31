import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

function GameDetailScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>game detail</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default GameDetailScreen;
