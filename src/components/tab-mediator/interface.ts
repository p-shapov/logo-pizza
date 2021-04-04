/* libraries and plugins */
import {FunctionComponent} from 'react';

export interface TabMediatorProps {
  screens: Array<{
    name: TabNames,
    Icon: SvgrComponent,
    Container: FunctionComponent
  }>
}

export default TabMediatorProps;