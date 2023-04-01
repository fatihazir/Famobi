import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { SharedContext } from '../store/context/SharedContext';
import { SharedContextModel } from '../models/typescript/sharedContext';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { useNavigation } from '@react-navigation/native';
import { UseNavigationModel } from '../models/typescript/navigation';
import { height_screen } from '../utilities/dimensions';

function FilterScreen(): JSX.Element {
    const navigation: UseNavigationModel = useNavigation();
    const currentContext: SharedContextModel = useContext(SharedContext)
    const { setPlatform, setCategory, setSortby, platform, setApplyTrigger, applyTrigger, category, sortby } = currentContext

    function OnApplyPressed() {
        navigation.goBack()
        setApplyTrigger(applyTrigger + 1)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.firstSection}>
                <Text style={styles.title}>Platform</Text>
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
                <Text style={styles.title}>Category : {category.text}</Text>
                <View style={styles.choicesSection}>
                    <BouncyCheckboxGroup
                        data={[{ id: "0", text: "Mmorpg", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "1", text: "Shooter", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "2", text: "Strategy", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "3", text: "Action", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "4", text: "Racing", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "5", text: "Sports", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "6", text: "Survival", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        ]}
                        style={{ flexDirection: 'column' }}
                        initial={category.id}
                        onChange={(selectedItem: ICheckboxButton) => {
                            //@ts-ignore
                            setCategory({ id: selectedItem.id, text: selectedItem.text })
                        }}
                    />
                </View>
                <Text style={styles.title}>Sort-by:{sortby.text}</Text>
                <View style={styles.choicesSection}>
                    <BouncyCheckboxGroup
                        data={[{ id: "0", text: "Release-date", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "1", text: "Popularity", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "2", text: "Alphabetical", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        { id: "3", text: "Relevance", textStyle: { textDecorationLine: 'none' }, style: { marginBottom: 12 } },
                        ]}
                        style={{ flexDirection: 'column' }}
                        initial={sortby.id}
                        onChange={(selectedItem: ICheckboxButton) => {
                            //@ts-ignore
                            setSortby({ id: selectedItem.id, text: selectedItem.text })
                        }}
                    />
                </View>

            </ScrollView>
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
        height: height_screen * .5,
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
        alignItems: 'center',
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
