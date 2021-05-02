/* libraries and plugins */
import {FunctionComponent} from 'react';

interface WindowMediatorProps {
  windows: Array<{
    name: WindowNames,
    type: 'MODAL' | 'CARD',
    Container: FunctionComponent
  }>
}

export default WindowMediatorProps;