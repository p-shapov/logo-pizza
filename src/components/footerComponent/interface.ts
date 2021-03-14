import {TMode} from '../../modules/UI/types';

export interface IFooterComponent {
  mode: TMode,
  setMode: (mode: TMode) => void,
  productsInCartCount: number
}

export interface INavButton {
  isActive: boolean,
  onPress: () => void,
  icon: JSX.Element,
  badgeCount?: number
}
