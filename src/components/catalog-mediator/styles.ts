/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  categoryList: {
    ...padding(0, 16),
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(24, 30, 24, 0)
  },
  categoryItemLast: {
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(24, 0)
  },
  categoryItemText: {
    marginLeft: 14,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  }
});

export default styles;