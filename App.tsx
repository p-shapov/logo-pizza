import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {useFonts} from 'expo-font';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './@types';
/* globals */
import rootReducers from './src/globals/reducers';
/* containers */
import {CatalogMediatorContainer} from './src/containers/catalog-mediator';
import {ProductInfoContainer} from './src/containers/product-info';
/* components */
import {StatusBarBackground} from './src/components/status-bar-background';
import {TabMediator} from './src/components/tab-mediator';
import {WindowMediator} from './src/components/window-mediator';
/* icons */
import IcoFooterCatalog from './src/assets/images/ico_footer_catalog.svg';
import IcoFooterContacts from './src/assets/images/ico_footer_contacts.svg';
import IcoFooterPersonalOffice from './src/assets/images/ico_footer_personal_office.svg';
import IcoFooterBasket from './src/assets/images/ico_footer_basket.svg';

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
      <NavigationContainer>
        <TabMediator screens={[
          {
            name: 'CATALOG',
            Container: () => (
              <WindowMediator
                windows={[
                  {
                    name: 'MAIN',
                    Container: CatalogMediatorContainer
                  },
                  {
                    name: 'PRODUCT_INFO',
                    Container: ProductInfoContainer
                  }
                ]}
              />
            ),
            Icon: IcoFooterCatalog
          },
          {
            name: 'CONTACTS',
            Container: () => (
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Contacts</Text></View>),
            Icon: IcoFooterContacts
          },
          {
            name: 'PERSONAL_OFFICE',
            Container: () => (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Personal
              office</Text></View>),
            Icon: IcoFooterPersonalOffice
          },
          {
            name: 'BASKET',
            Container: () => (
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Basket</Text></View>),
            Icon: IcoFooterBasket
          }
        ]}/>
      </NavigationContainer>
    </Provider>
  );
}
