import {Root} from '../../globals/interface';

namespace NFooter {
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

export default NFooter;
