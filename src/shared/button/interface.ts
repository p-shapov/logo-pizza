/* libraries and plugins */
import {ReactNode} from 'react';

interface IButton {
  children?: ReactNode,
  Icon?: SvgrComponent,
  view: 'SHAPED' | 'FILLED',
  type: 'PRIMARY' | 'SECONDARY',
  onPress: () => void
}

export default IButton;