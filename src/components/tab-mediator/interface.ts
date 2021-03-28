import {FunctionComponent} from 'react';
/* globals */
import {Root} from '../../globals/namespace';

export interface TabMediatorProps {
  screens: Array<{
    name: Root.Screen,
    Icon: SvgrComponent,
    Container: FunctionComponent
  }>
}

export default TabMediatorProps;