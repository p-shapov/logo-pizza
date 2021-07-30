/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {font, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  badgeFilled: {
    ...padding(9, 16),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  badgeShaped: {
    ...padding(8, 15),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  badgeFilledText: {
    textAlign: 'center',
    ...font('semi-bold', 13, 14, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: .5
  },
  badgeShapedText: {
    textAlign: 'center',
    ...font('semi-bold', 13, 14, COLORS.FOREGROUND_PRIMARY_ACTIVE),
    letterSpacing: .5
  }
});

export default styles;