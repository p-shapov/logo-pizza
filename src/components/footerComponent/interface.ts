import Color from 'color';
import {TMode} from '../../types';

export interface IFooterComponent {
  mode: TMode,
  setMode: (mode: TMode) => void,
  productsInCartCount: number,
  navButtonBackgroundColor: Color,
  navButtonBackgroundColorActive: Color,
  navButtonForegroundColor: Color,
  navButtonForegroundColorActive: Color
}

export interface INavButton {
  isActive: boolean,
  onPress: () => void,
  backgroundColor: Color,
  backgroundColorActive: Color,
  foregroundColor: Color,
  foregroundColorActive: Color,
  icon: JSX.Element,
  badgeCount?: number
}
