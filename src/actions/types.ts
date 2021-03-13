import {TMode} from '../types';
import {ACTIONS} from '../constants';

interface IActionSetMode {
  type: typeof ACTIONS.SET_MODE,
  mode: TMode
}

export type TActionTypes = IActionSetMode;