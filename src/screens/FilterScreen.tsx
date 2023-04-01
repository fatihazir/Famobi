import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { fonts } from '../utilities/fonts';
import { height_screen, width_screen } from '../utilities/dimensions';

function FilterScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.firstSection}></View>
            <View style={styles.applySection}>
                <TouchableOpacity>
                    <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: 'white'
    },
    firstSection: {
        flex: 5,
        backgroundColor: 'red'
    },
    applySection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    applyText: {
        fontSize: 32,
        color: '#07DAC0',
        fontWeight: 'bold',
        paddingVertical: 20,
        paddingHorizontal: 40,
    }
});

export default FilterScreen;
