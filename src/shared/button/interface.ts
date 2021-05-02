/* libraries and plugins */
import {ReactNode} from 'react';

interface ButtonProps {
  children?: ReactNode,
  Icon?: SvgrComponent,
  view: 'SHAPED' | 'FILLED',
  type: 'PRIMARY' | 'SECONDARY',
  disabled?: boolean,
  onPress: () => void
}

export default ButtonProps;