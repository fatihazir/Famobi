import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import GlobalLoading from './src/components/globalLoading';
import Overlay from './src/components/overlay';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { SharedContextProvider } from './src/store/context/SharedContext';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SharedContextProvider>
        <MainStackNavigator />
        <Overlay />
        <GlobalLoading />
      </SharedContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
