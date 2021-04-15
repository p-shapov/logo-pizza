/* libraries and plugins */
import {ReactNode} from 'react';

interface IButton {
  children?: ReactNode,
  Icon?: SvgrComponent,
  view: 'shaped' | 'filled',
  type: 'primary' | 'secondary',
  onPress: () => void
}

export default IButton;