import {TUIActionTypes, IUIState} from './types';

const UIInitialState: IUIState = {
  mode: 'CATALOG',
  setMode: (mode) => {console.log(mode)}
}

export default (state: IUIState = UIInitialState, action: TUIActionTypes): IUIState => {
  switch (action.type) {
    case 'SET_MODE':
      return ({...state, mode: action.mode});
    default: return state;
  }
};