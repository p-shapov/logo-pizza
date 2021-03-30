import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  selectWrapper: {
    position: 'relative',
    width: 203,
    height: 40
  },
  select: {
    position: 'absolute',
    bottom: 0,
    width: 203,
    ...padding(3, 12, 3, 3),
    backgroundColor: COLORS.SELECT_BACKGROUND,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.SELECT_BORDER,
    borderRadius: 8
  },
  selectExpanded: {
    position: 'absolute',
    bottom: 0,
    width: 203,
    ...padding(4, 13, 4, 4),
    backgroundColor: COLORS.SELECT_BACKGROUND,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowColor: COLORS.SELECT_BORDER_EXPANDED,
    elevation: 3
  },
  selectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selectButtonIconExpanded: {
    transform: [{rotate: '180deg'}]
  },
  selectItem: {
    width: 160
  },
  selectItemText: {
    ...padding(9, 16),
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: 0.56,
    color: COLORS.SELECT_ITEM_FOREGROUND
  }
});

export default styles;