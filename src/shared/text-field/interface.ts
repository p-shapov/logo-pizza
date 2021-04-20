/* libraries and plugins */
import {ReactNode} from 'react';

interface InputProps {
  placeholder?: string,
  label?: string,
  type: 'TEXT' | 'PHONE',
  value: string,
  onChange: (value: string) => void,
  onFocus?: () => void,
  button?: ReactNode
  editable?: boolean,
  isActive?: boolean,
  focused?: boolean
}

export default InputProps;