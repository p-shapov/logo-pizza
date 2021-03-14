import {TUIActionTypes, IUIState} from './types';

const UIInitialState: IUIState = {
  mode: 'CATALOG',
  setMode: (mode) => {}
}

export default (state: IUIState = UIInitialState, action: TUIActionTypes): IUIState => {
  console.log(state, action);
  switch (action.type) {
    case 'SET_MODE':
      return ({...state, mode: action.mode});
    default: return state;
  }
};