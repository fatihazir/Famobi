import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { height_screen } from '../../utilities/dimensions';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationModel } from '../../models/typescript/navigation';
import { fonts } from '../../utilities/fonts';

function FilterHeader(): JSX.Element {
    const navigation: UseNavigationModel = useNavigation();

    function OnGoBackPressed() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}></View>
            <View style={styles.titleSection}>
                <Text style={styles.titleText}>Filter and Sort</Text>
            </View>
            <TouchableOpacity style={styles.rightSection} onPress={OnGoBackPressed}>
                <Image source={require('../../assets/photos/x.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height_screen * .09,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    leftSection: {
        flex: 1
    },
    titleSection: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        fontFamily: fonts.SegoeBold,
        color: 'black'
    },
    rightSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FilterHeader;
