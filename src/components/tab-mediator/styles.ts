import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {padding} from '../../globals/helpers';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BACKGROUND
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(6, 16),
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOOTER_BORDER
  },
  tabButton: {
    ...padding(16, 22),
    borderRadius: 8,
    backgroundColor: COLORS.FOOTER_BUTTON_BACKGROUND
  },
  tabButtonActive: {
    ...padding(16, 22),
    borderRadius: 8,
    backgroundColor: COLORS.FOOTER_BUTTON_BACKGROUND_ACTIVE
  }
});

export default styles;