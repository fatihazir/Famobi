import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { height_screen } from '../../utilities/dimensions';
import { useNavigation } from '@react-navigation/native';
import SvgLeftArrow from '../../assets/svgs/SvgLeftArrow';
import { routes } from '../../utilities/routes';
import { UseNavigationModel } from '../../models/typescript/navigation';
import { SharedContextModel } from '../../models/typescript/sharedContext/index';
import { SharedContext } from '../../store/context/SharedContext';

function Header(): JSX.Element {
    const navigation: UseNavigationModel = useNavigation();
    const currentContext: SharedContextModel = useContext(SharedContext)

    const { showRightSideOfHeader, showGoBackButton } = currentContext

    function OnGoBackPressed() {
        navigation.goBack()
    }

    function OnGoFilterPressed() {
        navigation.navigate(routes.FilterScreen)
    }
    return (
        <View style={styles.container}>
            {showGoBackButton ?
                <TouchableOpacity style={styles.leftSection} onPress={OnGoBackPressed}>
                    <SvgLeftArrow />
                </TouchableOpacity>
                :
                <View style={styles.leftSection}></View>}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode='cover' source={require('../../assets/photos/freetogame.png')} />
            </View>
            {showRightSideOfHeader ?
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
    leftSection: {
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
        width: '50%',
        flex: 1,
    }

});

export default Header;
