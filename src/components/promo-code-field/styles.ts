/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, padding} from 'globals/helpers';

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
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: 1
  },
  promoCodeFieldErrorClose: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    ...padding(0, 24)
  }
});

export default styles;