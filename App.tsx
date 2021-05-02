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
import {DeliveryContainer} from 'containers/delivery';
import {PaymentContainer} from 'containers/payment';
import {ConfirmationContainer} from 'containers/confirmation';
import {CatalogNotificationContainer} from 'containers/catalog-notification';
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
  const PersonalOfficePlaceholder = () => (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Personal office</Text>
  </View>);

  const CatalogMediator = () => (<>
    <CatalogNotificationContainer/>
    <WindowMediator windows={[
      {
        name: 'MAIN',
        type: 'CARD',
        Container: CatalogMediatorContainer
      },
      {
        name: 'PRODUCT_INFO',
        type: 'CARD',
        Container: ProductInfoContainer
      }
    ]}
    />
  </>);

  const BasketMediator = () => (<WindowMediator windows={[
    {
      name: 'MAIN',
      type: 'CARD',
      Container: BasketContainer
    },
    {
      name: 'DELIVERY',
      type: 'CARD',
      Container: DeliveryContainer
    },
    {
      name: 'PAYMENT',
      type: 'CARD',
      Container: PaymentContainer
    }
  ]}/>);

  const ModalMediator = () => (<WindowMediator windows={[
    {
      name: 'CONFIRMATION',
      type: 'MODAL',
      Container: ConfirmationContainer
    }
  ]}/>);

  const RootMediator = () => (<TabMediatorContainer screens={[
    {
      name: 'CATALOG',
      Container: CatalogMediator,
      Icon: IcoFooterCatalog
    },
    {
      name: 'CONTACTS',
      Container: ContactsContainer,
      Icon: IcoFooterContacts
    },
    {
      name: 'PERSONAL_OFFICE',
      Container: PersonalOfficePlaceholder,
      Icon: IcoFooterPersonalOffice
    },
    {
      name: 'BASKET',
      Container: BasketMediator,
      Icon: IcoFooterBasket
    }
  ]}/>);

  return (<Provider store={store}>
    <StatusBar style={'inverted'}/>
    <StatusBarBackground/>
    <NavigationContainer>
      <WindowMediator windows={[
        {
          name: 'ROOT',
          type: 'CARD',
          Container: RootMediator
        },
        {
          name: 'MODALS',
          type: 'MODAL',
          Container: ModalMediator
        }
      ]}/>

    </NavigationContainer>
  </Provider>);
}
