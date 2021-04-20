/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  promoCodeFieldErrorWrapper: {
    position: 'relative',
    height: 0
  },
  promoCodeFieldError: {
    position: 'absolute',
    zIndex: 1,
    top: 8,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    ...padding(0, 0, 0, 24),
    backgroundColor: COLORS.BACKGROUND_SECONDARY,
    borderRadius: 8,
  },
  promoCodeFieldErrorText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
    color: COLORS.FOREGROUND_SECONDARY
  },
  promoCodeFieldErrorClose: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    ...padding(0, 24)
  }
});

export default styles;