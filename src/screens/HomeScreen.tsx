import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../utilities/routes/index';
import { useNavigationModel } from '../models/typescript/navigation';

function HomeScreen(): JSX.Element {
    const navigation: useNavigationModel = useNavigation();
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
