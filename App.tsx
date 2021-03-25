import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import './@types';
/* globals */
import rootReducers from './src/globals/reducers';
/* containers */
import {StatusBarBackground} from './src/components/status-bar-background';
import {FooterContainer} from './src/containers/footer';
import {CatalogListingContainer} from './src/containers/catalog-listing';
import {PromotionListingContainer} from './src/containers/promotion-listing';

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
      <StatusBar style={'inverted'}/>
      <StatusBarBackground/>
      <View style={styles.container}>
        <View>
          <PromotionListingContainer/>
        </View>
        <View style={styles.content}>
          <CatalogListingContainer/>
        </View>
        <FooterContainer/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxHeight: Dimensions.get('window').height
  },
  content: {
    flexShrink: 1
  }
});
