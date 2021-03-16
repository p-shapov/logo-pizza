import {Root} from '../../globals/interface';

export namespace FooterComponent {
  export interface IFooter {
    mode: Root.TMode,
    setMode: (mode: Root.TMode) => void,
    productsInCartCount: number
  }
  
  export interface INavButton {
    isActive: boolean,
    onPress: () => void,
    Icon: SvgrComponent,
    badgeCount?: number
  }
}
