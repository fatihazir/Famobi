import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

function FilterScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>filter</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default FilterScreen;
