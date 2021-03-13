import {TMode} from '../types';
import {ACTIONS} from '../constants';

export const setMode = (mode: TMode) => ({type: ACTIONS.SET_MODE, mode});