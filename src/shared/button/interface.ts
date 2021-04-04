/* libraries and plugins */
import {ReactNode} from 'react';

interface IButton {
  children: ReactNode,
  type: 'primary' | 'secondary',
  onPress: () => void
}

export default IButton;