import {combineReducers} from 'redux';
import UIReducer from '../modules/UI/reducer';
import catalogReducer from '../modules/catalog/reducer';
import basketReducer from '../modules/basket/reducer';

export default combineReducers({ui: UIReducer, catalog: catalogReducer, basket: basketReducer});