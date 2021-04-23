/* libraries and plugins */
import {ReactNode} from 'react';
import {TextInput} from 'react-native-gesture-handler';

interface InputProps {
  placeholder?: string,
  label?: string,
  type: 'TEXT' | 'PHONE',
  value: string,
  onChange: (value: string) => void,
  disabled?: boolean,
  onFocus?: () => void,
  button?: ReactNode
  editable?: boolean,
  isActive?: boolean,
  focused?: boolean,
  getRef?: (ref: TextInput | null) => void
}

export default InputProps;