import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MainStackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
