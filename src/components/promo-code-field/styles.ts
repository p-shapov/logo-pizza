/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  promoCodeFieldErrorWrapper: {
    position: 'relative',
    height: 0
  },
  promoCodeFieldError: {
    position: 'absolute',
    top: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND_SECONDARY
  }
});

export default styles;