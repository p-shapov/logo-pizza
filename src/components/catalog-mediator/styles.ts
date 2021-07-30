/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {font, padding} from 'globals/helpers';
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
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  }
});

export default styles;