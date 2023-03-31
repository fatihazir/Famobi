import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { height_screen } from '../../utilities/dimensions';
import { useNavigation } from '@react-navigation/native';
import SvgLeftArrow from '../../assets/svgs/SvgLeftArrow';
import { routes } from '../../utilities/routes';
import { useNavigationModel } from '../../models/typescript/navigation';

function Header(): JSX.Element {
    const navigation: useNavigationModel = useNavigation();
    let showFilterIcon = true

    function OnGoBackPressed() {
        navigation.goBack()
    }

    function OnGoFilterPressed() {
        navigation.navigate(routes.FilterScreen)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBackButton} onPress={OnGoBackPressed}>
                <SvgLeftArrow />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode='cover' source={require('../../assets/photos/freetogame.png')} />
            </View>
            {showFilterIcon ?
                <TouchableOpacity style={styles.rightSection} onPress={OnGoFilterPressed}>
                    <Image style={styles.filterIcon} resizeMode='center' source={require('../../assets/photos/filter.png')} />
                </TouchableOpacity>
                :
                <View style={styles.rightSection}></View>}
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
    logoContainer: {
        flex: 4,
        backgroundColor: 'green'
    },
    logo: {
        height: '100%',
        width: '100%'
    },
    goBackButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    rightSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterIcon: {
        height: '50%',
        width: '50%'
    }

});

export default Header;
