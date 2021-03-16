import {StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../globals/constants';
import {padding} from '../../globals/helpers';

export default StyleSheet.create({
  categoryList: {
    flexGrow: 0,
    ...padding(0, CONTAINER_PADDING)
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(24, 30, 24, 0)
  },
  categoryItemText: {
    marginLeft: 14,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19
  }
});