/* libraries and plugins */
import {Dimensions, Platform, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, padding} from 'globals/helpers';

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
    ...font('regular', 24, 28, COLORS.FOREGROUND_PRIMARY)
  },
  productInfoSizeValue: {
    marginLeft: 16,
    ...font('regular', 11, 20, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  productInfoDescription: {
    marginBottom: 16,
    ...font('regular', 13, 22, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  productInfoBuy: {
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
  }
});

export default styles;