import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../utilities/routes/index';
import { UseNavigationModel } from '../models/typescript/navigation';
import apibase from '../utilities/apibase';
import { links } from '../utilities/apibase/links'

function HomeScreen(): JSX.Element {
    const navigation: UseNavigationModel = useNavigation();

    function GetData() {
        apibase.Get({
            url: links.games + '?platform=pcsdsd',
            successFunction: (res: any) => {
                console.log("suc", res);
            },
            errorFunction: (res: any) => {
                console.log("error : ", res);
            },
            exceptionFunction: (ex: any) => {

            }
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <View style={styles.container}>
            <Button
                onPress={() => { navigation.navigate(routes.GameDetailScreen) }}
                title="Go detail"
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomeScreen;
