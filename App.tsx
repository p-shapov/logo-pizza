/* libraries and plugins */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './@types';
/* globals */
import rootReducers from 'globals/reducers';
/* containers */
import {CatalogMediatorContainer} from 'containers/catalog-mediator';
import {ProductInfoContainer} from 'containers/product-info';
import {ContactsContainer} from 'containers/contacts';
import {BasketContainer} from 'containers/basket';
import {TabMediatorContainer} from 'containers/tab-mediator';
/* components */
import {StatusBarBackground} from 'components/status-bar-background/index';
import {WindowMediator} from 'components/window-mediator/index';
/* icons */
import IcoFooterCatalog from 'images/ico_footer_catalog.svg';
import IcoFooterContacts from 'images/ico_footer_contacts.svg';
import IcoFooterPersonalOffice from 'images/ico_footer_personal_office.svg';
import IcoFooterBasket from 'images/ico_footer_basket.svg';

const store = createStore(rootReducers);

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style={'inverted'}/>
      <StatusBarBackground/>
      <NavigationContainer>
        <TabMediatorContainer screens={[
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
            Container: ContactsContainer,
            Icon: IcoFooterContacts
          },
          {
            name: 'PERSONAL_OFFICE',
            Container: () => (
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Personal office</Text>
              </View>
            ),
            Icon: IcoFooterPersonalOffice
          },
          {
            name: 'BASKET',
            Container: BasketContainer,
            Icon: IcoFooterBasket
          }
        ]}/>
      </NavigationContainer>
    </Provider>
  );
}
