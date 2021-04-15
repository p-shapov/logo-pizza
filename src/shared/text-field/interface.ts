/* libraries and plugins */
import {ReactNode} from 'react';

interface InputProps {
  placeholder?: string,
  label?: string,
  type: 'TEXT' | 'PHONE',
  value: string,
  setValue: (value: string) => void,
  onFocus?: () => void,
  button?: ReactNode
  editable?: boolean,
  isActive?: boolean
}

export default InputProps;