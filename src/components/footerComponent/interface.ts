import {TMode} from '../../modules/UI/types';

export interface IFooterComponent {
  mode: TMode,
  setMode: (mode: TMode) => void,
  productsInCartCount: number
}

export interface INavButton {
  isActive: boolean,
  onPress: () => void,
  Icon: SvgrComponent,
  badgeCount?: number
}
