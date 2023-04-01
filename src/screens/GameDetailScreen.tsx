import { useIsFocused } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking
} from 'react-native';
import { SharedContextModel } from '../models/typescript/sharedContext';
import { SharedContext } from '../store/context/SharedContext';
import { GameDetailParamsModel } from '../models/typescript/gameDetailScreenParams';
import { height_screen } from '../utilities/dimensions';
import { fonts } from '../utilities/fonts';

function GameDetailScreen(props: GameDetailParamsModel): JSX.Element {
    const currentContext: SharedContextModel = useContext(SharedContext)
    const isFocused = useIsFocused()
    const { setShowRightSideOfHeader, setShowGoBackButton } = currentContext
    const { game } = props.route.params

    useEffect(() => {
        isFocused ?
            (setShowRightSideOfHeader(false), setShowGoBackButton(true)) :
            (setShowRightSideOfHeader(true), setShowGoBackButton(false))
    }, [isFocused])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode='stretch' style={styles.image} source={{ uri: game.thumbnail }} />
            </View>
            <ScrollView style={styles.textContainer}>
                <Text style={[styles.commonText, styles.publisher]}>Publisher : {game.publisher}</Text>
                <Text style={[styles.commonText, styles.publisher]}>Developer : {game.developer}</Text>
                <Text style={[styles.commonText, styles.title]}>{game.title}</Text>
                <Text style={[styles.commonText]}>Category : {game.genre}</Text>
                <Text style={[styles.commonText]}>Platform : {game.platform}</Text>
                <Text style={[styles.commonText, styles.desc]}>{game.short_description}</Text>
                <Text style={styles.commonText}>Release date : {game.release_date}</Text>

                <TouchableOpacity onPress={() => Linking.openURL(game.freetogame_profile_url)} style={styles.visitContainer}>
                    <Text style={styles.visit}>Visit the website</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        height: '30%',
        marginTop: 10,
        elevation: 15,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    image: {
        flex: 1
    },
    textContainer: {
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    commonText: {
        fontFamily: fonts.Segoe,
        color: 'black',
        fontSize: 16
    },
    publisher: {
        textAlign: 'right'
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.SegoeBold,
        marginBottom: 12
    },
    desc: {
        paddingVertical: 14,
        fontFamily: fonts.SegoeItalic
    },
    visitContainer: {
        borderRadius: 100,
        width: '80%',
        borderWidth: 0.5,
        padding: 20,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: height_screen * .1
    },
    visit: {
        fontSize: 24,
        fontFamily: fonts.Segoe,
        color: 'blue'
    }
});

export default GameDetailScreen;
