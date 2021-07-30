/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {font, margin, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  confirmation: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmationWindow: {
    zIndex: 1,
    ...margin(0, 16),
    ...padding(30, 24),
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
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
  confirmationImage: {
    width: 160,
    height: 160,
    marginBottom: 22
  },
  confirmationTitle: {
    marginBottom: 20,
    ...font('regular', 24, 28, COLORS.FOREGROUND_PRIMARY)
  },
  confirmationOrderNumber: {
    marginBottom: 20,
    ...font('regular', 14, 22, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  confirmationDescription: {
    marginBottom: 20,
    textAlign: 'center',
    ...font('regular', 14, 22, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  confirmationGoToMenu: {
    alignSelf: 'stretch'
  },
  confirmationOuterClickArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default styles;