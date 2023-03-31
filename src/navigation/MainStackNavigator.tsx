import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../utilities/routes';
import HomeScreen from '../screens/HomeScreen';
import GameDetailScreen from '../screens/GameDetailScreen';
import FilterScreen from '../screens/FilterScreen';
import { Platform, View } from 'react-native';
import Header from '../components/MainStackNavigator/Header';

const Stack = createStackNavigator();

function MainStackNavigator(): JSX.Element {
    let isAndroid = Platform.OS == 'android' ? true : false

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routes.HomeScreen}
                screenOptions={{
                    header: (() => <Header />)
                }}>
                <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
                <Stack.Screen name={routes.GameDetailScreen} component={GameDetailScreen} />
                <Stack.Screen
                    name={routes.FilterScreen}
                    component={FilterScreen}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                        gestureEnabled: true,
                        ...(isAndroid && TransitionPresets.ModalPresentationIOS)
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainStackNavigator;
