/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {margin, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  confirmation: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(56, 56, 56, 0.6)'
  },
  confirmationWindow: {
    position: 'absolute',
    zIndex: 2,
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
    fontFamily: 'Rubik',
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.FOREGROUND_PRIMARY
  },
  confirmationOrderNumber: {
    marginBottom: 20,
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  confirmationDescription: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  confirmationGoToMenu: {
    alignSelf: 'stretch'
  },
  confirmationOuterClickArea: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default styles;