/* libraries and plugins */
import {FunctionComponent} from 'react';

interface TabMediatorProps {
  screens: Array<{
    name: TabNames,
    Icon: SvgrComponent,
    Container: FunctionComponent
  }>,
  productInCartCount: number
}

export default TabMediatorProps;