/* libraries and plugins */
import {ReactNode} from 'react';

interface IButton {
  children?: ReactNode,
  Icon?: SvgrComponent,
  type: 'primary' | 'secondary' | 'disabled',
  onPress: () => void
}

export default IButton;