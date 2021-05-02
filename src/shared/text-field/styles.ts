/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    minHeight: 48,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldDisabled: {
    flexDirection: 'row',
    minHeight: 48,
    ...padding(3, 3),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldWithLabel: {
    position: 'relative',
    flexDirection: 'row',
    minHeight: 48,
    marginTop: 30,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldWithLabelDisabled: {
    position: 'relative',
    flexDirection: 'row',
    minHeight: 48,
    marginTop: 30,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8,
    backgroundColor: COLORS.FOREGROUND_PRIMARY_DISABLED
  },
  textFieldMultiline: {
    flexDirection: 'row',
    height: 100,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldMultilineDisabled: {
    flexDirection: 'row',
    height: 100,
    ...padding(3, 3),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldMultilineWithLabel: {
    position: 'relative',
    flexDirection: 'row',
    height: 100,
    marginTop: 30,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  textFieldMultilineWithLabelDisabled: {
    position: 'relative',
    flexDirection: 'row',
    height: 100,
    marginTop: 30,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8,
    backgroundColor: COLORS.FOREGROUND_PRIMARY_DISABLED
  },
  textFieldLabelWrapper: {
    position: 'absolute',
    bottom: 56
  },
  textFieldMultilineLabelWrapper: {
    position: 'absolute',
    bottom: 108
  },
  textFieldLabel: {
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 22,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  textFieldInput: {
    flexGrow: 1,
    ...padding(0, 13),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textDecorationLine: 'none',
    color: COLORS.FOREGROUND_PRIMARY
  },
  textFieldInputActive: {
    flexGrow: 1,
    ...padding(0, 13),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textDecorationLine: 'none',
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  textFieldMultilineInput: {
    flexGrow: 1,
    ...padding(13, 13),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'top',
    textDecorationLine: 'none',
    color: COLORS.FOREGROUND_PRIMARY
  },
  textFieldMultilineInputActive: {
    flexGrow: 1,
    ...padding(13, 13),
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'top',
    textDecorationLine: 'none',
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  textFieldButton: {
    width: 42
  }
});

export default styles;