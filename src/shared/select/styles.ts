import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  select: {
    width: 203,
    ...padding(3, 3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.SELECT_BORDER,
    borderRadius: 8
  },
  selectItem: {
    width: 160
  }
});

export default styles;