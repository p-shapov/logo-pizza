/* libraries and plugins */
import {FunctionComponent} from 'react';

interface WindowMediatorProps {
  windows: Array<{
    name: WindowNames,
    Container: FunctionComponent
  }>
}

export default WindowMediatorProps;