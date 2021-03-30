import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {margin, padding} from '../../globals/helpers';

const styles = StyleSheet.create({
  productInfo: {
    position: 'relative',
    flexShrink: 1,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    ...padding(17, 16),
    backgroundColor: COLORS.PRODUCT_INFO_BACKGROUND,
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
    color: COLORS.PRODUCT_INFO_TITLE_FOREGROUND
  },
  productInfoSizeValue: {
    marginLeft: 16,
    fontFamily: 'Rubik',
    fontSize: 11,
    lineHeight: 20,
    color: COLORS.PRODUCT_INFO_DESCRIPTION_FOREGROUND
  },
  productInfoDescription: {
    marginBottom: 16,
    fontFamily: 'Rubik',
    fontSize: 13,
    lineHeight: 22,
    color: COLORS.PRODUCT_INFO_DESCRIPTION_FOREGROUND
  }
});

export default styles;