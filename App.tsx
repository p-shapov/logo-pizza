import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import './@types';
/* globals */
import rootReducers from './src/globals/reducers';
/* containers */
import FooterContainer from './src/containers/footerContainer';

const store = createStore(rootReducers);

export default function App() {
  const [loaded] = useFonts({
    'Rubik': require('./src/assets/fonts/Rubik.ttf'),
    'Rubik-SemiBold': require('./src/assets/fonts/Rubik-SemiBold.ttf')
  });
  
  if (!loaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello there!</Text>
        <StatusBar style="auto"/>
        <FooterContainer/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
