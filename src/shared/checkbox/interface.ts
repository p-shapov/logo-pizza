/* libraries and plugins */
import {ReactNode} from 'react';

interface CheckboxProps {
  checked: boolean,
  children: ReactNode,
  onPress: () => void
}

export default CheckboxProps;