import {FunctionComponent} from 'react';
/* globals */
import {Root} from '../../globals/namespace';

interface WindowMediatorProps {
  windows: Array<{name: Root.Window, Container: FunctionComponent}>
}

export default WindowMediatorProps;