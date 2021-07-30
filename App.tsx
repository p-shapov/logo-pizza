/* libraries and plugins */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {Rubik_400Regular, Rubik_500Medium, useFonts} from '@expo-google-fonts/rubik';
import {enableScreens} from 'react-native-screens';
import './@types';
/* globals */
import reducers from 'globals/reducers';
/* containers */
import {CatalogMediatorContainer} from 'containers/catalog-mediator';
import {ProductInfoContainer} from 'containers/product-info';
import {ContactsContainer} from 'containers/contacts';
import {BasketContainer} from 'containers/basket';
import {TabMediatorContainer} from 'containers/tab-mediator';
import {DeliveryContainer} from 'containers/delivery';
import {PaymentContainer} from 'containers/payment';
import {ConfirmationContainer} from 'containers/confirmation';
import {PromotionContainer} from 'containers/promotion';
import {ModalMediatorContainer} from 'containers/modal-mediator';
import {NotificationMediatorContainer} from 'containers/notification-mediator';
import {ProductAddedNotificationContainer} from 'containers/product-added-notification';
/* components */
import {StatusBarBackground} from 'components/status-bar-background/index';
import {WindowMediator} from 'components/window-mediator/index';
/* icons */
import IcoFooterCatalog from 'images/ico_footer_catalog.svg';
import IcoFooterContacts from 'images/ico_footer_contacts.svg';
import IcoFooterPersonalOffice from 'images/ico_footer_personal_office.svg';
import IcoFooterBasket from 'images/ico_footer_basket.svg';

enableScreens();

const store = createStore(reducers);

const PersonalOfficePlaceholder = () => (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Personal office</Text>
</View>);

const CatalogMediator = () => (<WindowMediator windows={[
  {
    name: 'ROOT',
    Container: CatalogMediatorContainer
  },
  {
    name: 'PRODUCT_INFO',
    Container: ProductInfoContainer
  }
]}/>);

const BasketMediator = () => (<WindowMediator windows={[
  {
    name: 'ROOT',
    Container: BasketContainer
  },
  {
    name: 'DELIVERY',
    Container: DeliveryContainer
  },
  {
    name: 'PAYMENT',
    Container: PaymentContainer
  }
]}/>);


const RootContainer = () => (<>
  <ModalMediatorContainer modals={[
    {
      name: 'CONFIRMATION',
      Container: ConfirmationContainer
    },
    {
      name: 'PROMOTION',
      Container: PromotionContainer
    }
  ]}/>
  <NotificationMediatorContainer notifications={[
    {
      name: 'PRODUCT_ADDED',
      Container: ProductAddedNotificationContainer
    }
  ]}/>
  <TabMediatorContainer screens={[
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
  ]}/>
</>);

const AppContainer = () => (<WindowMediator windows={[
  {
    name: 'ROOT',
    Container: RootContainer
  }
]}/>);

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium
  });

  if (!fontsLoaded) {
    return (<AppLoading/>);
  }

  return (<Provider store={store}>
    <StatusBar style={'inverted'}/>
    <StatusBarBackground/>
    <NavigationContainer>
      <AppContainer/>
    </NavigationContainer>
  </Provider>);
}
