/* libraries and plugins */
import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  productInfo: {
    position: 'relative',
    flexShrink: 1,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    ...padding(17, 16),
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
    borderWidth: 0
  },
  productInfoClose: {
    position: 'absolute',
    zIndex: 1,
    ...padding(22, 16)
  },
  productInfoImageWrapper: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  productInfoImage: {
    width: 328,
    height: 328,
  },
  productInfoHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  productInfoTitle: {
    fontFamily: 'Rubik',
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.FOREGROUND_PRIMARY
  },
  productInfoSizeValue: {
    marginLeft: 16,
    fontFamily: 'Rubik',
    fontSize: 11,
    lineHeight: 20,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  productInfoDescription: {
    marginBottom: 16,
    fontFamily: 'Rubik',
    fontSize: 13,
    lineHeight: 22,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  productInfoBuy: {
    borderStyle: 'solid',
    borderRadius: 8,
    shadowColor: COLORS.SHADOW_ACTIVE,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 16,
    elevation: 3
  }
});

export default styles;