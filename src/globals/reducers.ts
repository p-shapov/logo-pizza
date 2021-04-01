import {combineReducers} from 'redux';
import catalogReducer from '../modules/catalog/reducer';
import basketReducer from '../modules/basket/reducer';
import contactsReducer from '../modules/contacts/reducer';

export default combineReducers({catalog: catalogReducer, contacts: contactsReducer, basket: basketReducer});