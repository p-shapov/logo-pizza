import {combineReducers} from 'redux';
import catalogReducer from '../modules/catalog/reducer';
import basketReducer from '../modules/basket/reducer';

export default combineReducers({catalog: catalogReducer, basket: basketReducer});