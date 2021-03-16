import {UIModule} from './namespace';
import {Root} from '../../globals/interface';

export const setMode = (mode: Root.TMode): UIModule.ISetMode => ({type: 'SET_MODE', mode});