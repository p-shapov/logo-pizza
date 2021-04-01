import {FunctionComponent} from 'react';

interface WindowMediatorProps {
  windows: Array<{name: 'MAIN' | 'PRODUCT_INFO', Container: FunctionComponent}>
}

export default WindowMediatorProps;