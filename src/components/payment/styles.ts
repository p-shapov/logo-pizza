/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {margin, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  payment: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  paymentShrink: {
    position: 'relative',
    flexShrink: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  paymentScrollView: {
    ...padding(24, 16, 88)
  },
  paymentMethod: {
    marginBottom: 16
  },
  paymentMethodLabel: {
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  },
  paymentWishesForOrder: {
    ...margin(16, 0)
  },
  paymentName: {
    marginBottom: 10
  },
  paymentPhone: {
    marginBottom: 16
  },
  paymentPrivacyRules: {
    width: 292,
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  paymentPrivacyRulesLink: {
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  paymentConfirm: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    ...margin(0, 16),
    borderStyle: 'solid',
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
  paymentConfirmation: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...padding(0, 16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(56, 56, 56, 0.6)'
  },
  paymentConfirmationWindow: {
    ...padding(30, 24),
    alignItems: 'stretch',
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
  }
});

export default styles;