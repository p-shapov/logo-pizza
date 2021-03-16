import {StyleSheet} from 'react-native';
import {padding} from '../../globals/helpers';
import {CONTAINER_PADDING} from '../../globals/constants';

export default StyleSheet.create({
  footer: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(6, CONTAINER_PADDING)
  },
  footerTab: {
    ...padding(16, 22),
    borderRadius: 8,
  },
  footerTabBadgeWrapper: {
    position: 'relative'
  },
  footerTabBadge: {
    position: 'absolute',
    top: -7,
    right: 0,
    ...padding(3, 5),
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 16
  },
  footerTabBadgeText: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: 8,
    lineHeight: 10
  }
});