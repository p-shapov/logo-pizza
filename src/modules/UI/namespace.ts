import {Root} from '../../globals/interface';

export namespace UIModule {
  export interface ISetMode {
    type: 'SET_MODE',
    mode: Root.TMode
  }
  
  export type TActions = ISetMode;
  
  export interface IState {
    mode: Root.TMode,
    setMode: (mode: Root.TMode) => void
  }
}
