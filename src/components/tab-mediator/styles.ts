/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(6, 16),
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.DELIMITER
  },
  tabButton: {
    position: 'relative',
    ...padding(16, 22),
    borderRadius: 8
  },
  tabButtonActive: {
    ...padding(16, 22),
    borderRadius: 8,
    backgroundColor: COLORS.BACKGROUND_PRIMARY_ACTIVE
  },
  tabBadge: {
    position: 'absolute',
    right: 14,
    top: 9,
    ...padding(3, 5),
    backgroundColor: COLORS.FOREGROUND_PRIMARY,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND_PRIMARY
  },
  tabBadgeFocused: {
    position: 'absolute',
    right: 14,
    top: 9,
    ...padding(3, 5),
    backgroundColor: COLORS.FOREGROUND_PRIMARY,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND_PRIMARY_ACTIVE
  },
  tabBadgeActive: {
    position: 'absolute',
    right: 14,
    top: 9,
    ...padding(3, 5),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND_PRIMARY
  },
  tabBadgeFocusedActive: {
    position: 'absolute',
    right: 14,
    top: 9,
    ...padding(3, 5),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND_PRIMARY_ACTIVE
  },
  tabBadgeText: {
    fontFamily: 'Rubik',
    fontSize: 8,
    lineHeight: 10,
    color: COLORS.FOREGROUND_SECONDARY
  }
});

export default styles;