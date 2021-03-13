import {padding} from '../../helpers';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 360,
    ...padding(16, 6)
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

export default style;