/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, margin, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    ...margin(9, 16, 0),
    ...padding(0, 8, 0, 24),
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
    flexGrow: 1,
    ...padding(16, 0)
  },
  notificationTitle: {
    marginBottom: 8,
    ...font('semi-bold', 13, 15, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: .5
  },
  notificationDescription: {
    ...font('regular', 13, 15, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: .5
  }
});

export default styles;