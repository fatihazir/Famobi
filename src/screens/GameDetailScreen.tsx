import { useIsFocused } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { SharedContextModel } from '../models/typescript/sharedContext';
import { SharedContext } from '../store/context/SharedContext';

function GameDetailScreen(): JSX.Element {
    const currentContext: SharedContextModel = useContext(SharedContext)
    const isFocused = useIsFocused()

    const { setShowRightSideOfHeader } = currentContext

    useEffect(() => {
        isFocused ? setShowRightSideOfHeader(false) : setShowRightSideOfHeader(true)
    }, [isFocused])


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
