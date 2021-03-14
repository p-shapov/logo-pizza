import {IUIActionSetMode, TMode} from './types';

export const setMode = (mode: TMode): IUIActionSetMode => ({type: 'SET_MODE', mode});