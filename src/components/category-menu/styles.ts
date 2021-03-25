import {StyleSheet} from 'react-native';
/* globals */
import {margin, padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  categoryList: {
    ...padding(0, 16),
    backgroundColor: '#FFFFFF'
  },
  categoryItemWrapper: {
    ...margin(0, 30, 0, 0)
  },
  categoryItemWrapperLast: {
    margin: 0
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(24, 0)
  },
  categoryItemText: {
    marginLeft: 14,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.CATEGORY_ITEM_TEXT_FOREGROUND
  },
  categoryItemTextActive: {
    marginLeft: 14,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.CATEGORY_ITEM_TEXT_FOREGROUND_ACTIVE
  }
});

export default styles;