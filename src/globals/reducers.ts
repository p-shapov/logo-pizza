import {combineReducers} from 'redux';
import UIReducer from '../modules/UI/reducer';
import basketReducer from '../modules/basket/reducer';

export default combineReducers({ui: UIReducer, basket: basketReducer});