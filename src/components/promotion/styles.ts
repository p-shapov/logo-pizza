/* libraries and plugins */
import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {font, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  promotion: {
    position: 'relative',
    flex: 1
  },
  promotionWindow: {
    zIndex: 1,
    alignItems: 'stretch',
    ...padding(32, 16),
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  promotionImageWrapper: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden'
  },
  promotionImage: {
    width: Dimensions.get('window').width - 32,
    height: (Dimensions.get('window').width - 32) * 0.5
  },
  promotionTitle: {
    marginBottom: 8,
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  promotionDescription: {
    ...font('regular', 12, 18, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  promotionOuterClickArea: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default styles;