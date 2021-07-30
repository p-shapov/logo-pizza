/* libraries and plugins */
import {combineReducers} from 'redux';
/* modules */
import catalogReducer from 'modules/catalog/reducer';
import basketReducer from 'modules/basket/reducer';
import contactsReducer from 'modules/contacts/reducer';
import uiReducer from 'modules/ui/reducer';

export default combineReducers({catalog: catalogReducer, contacts: contactsReducer, basket: basketReducer, ui: uiReducer});