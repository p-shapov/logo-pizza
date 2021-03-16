import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import './@types';
/* globals */
import rootReducers from './src/globals/reducers';
import {COLORS} from './src/globals/constants';
/* containers */
import FooterContainer from './src/containers/footer';
import CategoryListContainer from './src/containers/category-list';
import PromotionListingContainer from './src/containers/promotion-listing';

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
        <View style={styles.content}>
          <StatusBar
            style={'inverted'}
            backgroundColor={COLORS.STATUS_BAR_BACKGROUND_COLOR}
          />
          <PromotionListingContainer />
          <CategoryListContainer />
          <View style={styles.main}>
            <Text>Hello there!</Text>
          </View>
          <FooterContainer/>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  main: {
    flexGrow: 1
  }
});
