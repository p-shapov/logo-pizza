import {TMode} from '../../types';

export interface IFooterContainer {
  mode: TMode,
  setMode: (mode: TMode) => void,
  productsInCartCount: number,
}