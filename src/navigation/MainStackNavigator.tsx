import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../utilities/routes';
import HomeScreen from '../screens/HomeScreen';
import GameDetailScreen from '../screens/GameDetailScreen';
import FilterScreen from '../screens/FilterScreen';

const Stack = createStackNavigator();

function MainStackNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.HomeScreen}>
                <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
                <Stack.Screen name={routes.GameDetailScreen} component={GameDetailScreen} />
                <Stack.Screen name={routes.FilterScreen} component={FilterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainStackNavigator;
