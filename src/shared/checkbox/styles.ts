/* libraries and plugins */
import {StyleSheet} from 'react-native';
import {COLORS} from 'globals/constants';
/* globals */

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
  },
  checkboxGap: {
    width: 12
  },
  checkboxMarkOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    marginTop: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_SUBTLE,
    borderRadius: 4
  },
  checkboxMarkOuterActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    marginTop: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 4
  },
  checkboxMarkInner: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 2
  }
});

export default styles;