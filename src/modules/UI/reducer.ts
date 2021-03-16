import {UIModule} from './namespace';
import {Root} from '../../globals/interface';

const initialState: UIModule.IState = {
  mode: 'CATALOG',
  setMode: (mode: Root.TMode) => {
    console.log(mode);
  }
};

export default (state: UIModule.IState = initialState, action: UIModule.TActions): UIModule.IState => {
  switch (action.type) {
    case 'SET_MODE':
      return ({...state, mode: action.mode});
    default:
      return state;
  }
};