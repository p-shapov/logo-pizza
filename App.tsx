import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import './@types';
/* globals */
import rootReducers from './src/globals/reducers';
/* containers */
import {FooterContainer} from './src/containers/footer';
import {CatalogListingContainer} from './src/containers/catalog-listing';
import {TabMediatorContainer} from './src/containers/tab-mediator';
/* components */
import {StatusBarBackground} from './src/components/status-bar-background';

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
        <TabMediatorContainer
          catalogTabContent={<CatalogListingContainer/>}
          contactsTabContent={<View style={styles.mockTab}><Text>Contacts</Text></View>}
          personalOfficeTabContent={<View style={styles.mockTab}><Text>Personal office</Text></View>}
          basketTabContent={<View style={styles.mockTab}><Text>Basket</Text></View>}
        />
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
  mockTab: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
