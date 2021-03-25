import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(6, 16),
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOOTER_BORDER
  },
  footerTab: {
    ...padding(16, 22),
    borderRadius: 8,
    backgroundColor: COLORS.FOOTER_BUTTON_BACKGROUND
  },
  footerTabActive: {
    ...padding(16, 22),
    borderRadius: 8,
    backgroundColor: COLORS.FOOTER_BUTTON_BACKGROUND_ACTIVE
  },
  footerTabBadgeWrapper: {
    position: 'relative',
    paddingRight: 8
  },
  footerTabBadge: {
    position: 'absolute',
    top: -7,
    right: 0,
    ...padding(3, 5),
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 16,
    borderColor: COLORS.FOOTER_BUTTON_BACKGROUND,
    backgroundColor: COLORS.FOOTER_BUTTON_FOREGROUND
  },
  footerTabBadgeActive: {
    position: 'absolute',
    top: -7,
    right: 0,
    ...padding(3, 5),
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 16,
    borderColor: COLORS.FOOTER_BUTTON_BACKGROUND_ACTIVE,
    backgroundColor: COLORS.FOOTER_BUTTON_FOREGROUND_ACTIVE
  },
  footerTabBadgeText: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: 8,
    lineHeight: 10,
    color: COLORS.FOOTER_BUTTON_BACKGROUND
  },
});

export default styles;