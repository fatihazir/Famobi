import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { SharedContext } from '../store/context/SharedContext';
import { SharedContextModel } from '../models/typescript/sharedContext';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { useNavigation } from '@react-navigation/native';
import { UseNavigationModel } from '../models/typescript/navigation';

function FilterScreen(): JSX.Element {
    const navigation: UseNavigationModel = useNavigation();
    const currentContext: SharedContextModel = useContext(SharedContext)
    const { setPlatform, setCategory, setSortby, platform, setApplyTrigger, applyTrigger } = currentContext

    function OnApplyPressed() {
        navigation.goBack()
        setApplyTrigger(applyTrigger + 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <Text style={styles.title}>Platform : {platform.text}</Text>
                <View style={styles.choicesSection}>
                    <BouncyCheckboxGroup
                        data={[{ id: "0", text: "Pc", textStyle: { textDecorationLine: 'none' } },
                        { id: "1", text: "Browser", textStyle: { textDecorationLine: 'none' } },
                        { id: "2", text: "All", textStyle: { textDecorationLine: 'none' } }]}
                        style={{ width: '100%', justifyContent: 'space-around' }}
                        initial={platform.id}
                        onChange={(selectedItem: ICheckboxButton) => {
                            //@ts-ignore
                            setPlatform({ id: selectedItem.id, text: selectedItem.text })
                        }}
                    />
                </View>
                <Text style={styles.title}>Category</Text>
                <View style={styles.choicesSection}>

                </View>
                <Text style={styles.title}>Sort-by</Text>
                <View style={styles.choicesSection}>

                </View>

            </View>
            <View style={styles.applySection}>
                <TouchableOpacity onPress={OnApplyPressed}>
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
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
        alignSelf: 'center',
    },
    choicesSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 24,
        paddingTop: 12
    },
    option: {
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
    },
});

export default FilterScreen;
