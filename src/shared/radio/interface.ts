/* libraries and plugins */
import {ReactNode} from 'react';

interface RadioProps {
  checked: boolean,
  children: ReactNode,
  onPress: () => void
}

export default RadioProps;