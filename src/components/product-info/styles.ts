import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {padding} from '../../globals/helpers';

const styles = StyleSheet.create({
  productInfo: {
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
  productInfoImage: {
    width: 328,
    height: 328,
    marginBottom: 10
  },
  productInfoTitle: {
    marginBottom: 8,
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