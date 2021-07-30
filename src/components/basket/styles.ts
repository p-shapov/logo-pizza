/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {font, margin, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  basket: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  basketHeader: {
    ...padding(30, 16)
  },
  basketHeaderText: {
    ...font('semi-bold', 24, 32, COLORS.FOREGROUND_PRIMARY)
  },
  basketDelimiter: {
    height: 1,
    backgroundColor: COLORS.DELIMITER
  },
  basketPromoField: {
    ...padding(24, 16, 0)
  },
  basketProducts: {
    ...padding(24, 16, 76)
  },
  basketProductCard: {
    flexDirection: 'row',
    ...padding(16, 0),
  },
  basketProductCardImage: {
    width: 104,
    height: 104
  },
  basketProductCardInfo: {
    paddingLeft: 16,
    flexGrow: 1
  },
  basketProductCardHeader: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  basketProductCardTitle: {
    marginBottom: 8,
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  basketProductCardSize: {
    ...font('regular', 12, 18, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  basketProductCardPrice: {
    ...font('semi-bold', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  basketProductCardPriceActive: {
    marginBottom: 4,
    ...font('semi-bold', 16, 19, COLORS.FOREGROUND_PRIMARY_ACTIVE)
  },
  basketProductCardOldPrice: {
    alignSelf: 'flex-end',
    ...font('regular', 14, 17, COLORS.FOREGROUND_PRIMARY),
    textDecorationLine: 'line-through'
  },
  basketProductCardFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  basketProductCardFooterGap: {
    width: 24
  },
  basketProductCardDelete: {
    width: 44
  },
  basketEmpty: {
    flexGrow: 1,
    position: 'relative',
    paddingTop: 170
  },
  basketEmptyBackground: {
    alignSelf: 'center',
    position: 'absolute',
    top: 40
  },
  basketEmptyText: {
    alignSelf: 'center',
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  basketCheckout: {
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
  }
});

export default styles;