/* libraries and plugins */
import {FunctionComponent} from 'react';

interface ModalMediatorProps {
  current: ModalNames,
  modals: Array<{ name: ModalNames, Container: FunctionComponent }>
}

export default ModalMediatorProps;