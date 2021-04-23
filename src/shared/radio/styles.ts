/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row'
  },
  radioGap: {
    width: 16
  },
  radioMarkOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_SUBTLE,
    borderRadius: 12
  },
  radioMarkOuterActive: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 12
  },
  radioMarkInner: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 12
  }
});

export default styles;