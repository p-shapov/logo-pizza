/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldInput: {
    flexGrow: 1,
    ...padding(0, 16),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.FOREGROUND_PRIMARY
  },
  textFieldInputActive: {
    flexGrow: 1,
    ...padding(0, 16),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  textFieldButton: {
    width: 42
  }
});

export default styles;