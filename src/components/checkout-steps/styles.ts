/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, margin, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  checkoutSteps: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  checkoutStepsHeading: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...padding(20, 16, 40)
  },
  checkoutStepsGoBack: {
    position: 'absolute',
    left: 16,
    alignSelf: 'center',
    ...padding(16, 16)
  },
  checkoutStepsDelimiter: {
    height: 1,
    backgroundColor: COLORS.DELIMITER
  },
  checkoutStepsIndicators: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkoutStepsIndicator: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY,
    borderRadius: 16,
    opacity: .4
  },
  checkoutStepsIndicatorActive: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY,
    borderRadius: 16,
    opacity: 1
  },
  checkoutStepsIndicatorNumber: {
    ...font('regular', 14, 22, COLORS.FOREGROUND_PRIMARY)
  },
  checkoutStepsIndicatorTitleWrapper: {
    bottom: -22,
    width: 55,
    position: 'absolute',
    alignItems: 'center'
  },
  checkoutStepsIndicatorTitle: {
    ...font('regular', 12, 22, COLORS.FOREGROUND_PRIMARY)
  },
  checkoutStepsIndicatorGap: {
    flexDirection: 'row',
    width: 72,
    ...margin(0, 0, 0, 4)
  }
});

export default styles;