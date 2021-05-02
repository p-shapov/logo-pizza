/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {margin, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  notification: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 9,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    ...margin(0, 16),
    ...padding(16, 8, 16, 24),
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderRadius: 8,
    ...(Platform.OS === 'ios' ? {
      shadowColor: COLORS.SHADOW_ACTIVE,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowRadius: 16
    } : {
      elevation: 3
    })
  },
  notificationOpenBasket: {
    flexGrow: 1
  },
  notificationTitle: {
    marginBottom: 8,
    fontFamily: 'Rubik-SemiBold',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  },
  notificationDescription: {
    fontFamily: 'Rubik',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  }
});

export default styles;