/* libraries and plugins */
import {FunctionComponent} from 'react';

interface WindowMediatorProps {
  windows: Array<{
    name: 'MAIN' | 'PRODUCT_INFO' | 'DELIVERY' | 'PAYMENT',
    Container: FunctionComponent
  }>
}

export default WindowMediatorProps;