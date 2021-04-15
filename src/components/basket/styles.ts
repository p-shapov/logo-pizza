/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  basket: {
    flex: 1
  },
  basketHeader: {
    ...padding(30, 16)
  },
  basketHeaderText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.FOREGROUND_PRIMARY
  },
  basketDelimiter: {
    height: 1,
    backgroundColor: COLORS.DELIMITER
  },
  basketPromoField: {
    marginTop: 24,
    ...padding(0, 16)
  },
  basketProducts: {
    ...padding(24, 16)
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
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  },
  basketProductCardSize: {
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  basketProductCardPrice: {
    marginBottom: 4,
    fontFamily: 'Rubik-SemiBold',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  },
  basketProductCardPriceActive: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  basketProductCardOldPrice: {
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 17,
    textDecorationLine: 'line-through'
  },
  basketProductCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22
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
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  },
  basketFooter: {
    justifyContent: 'flex-end',
    ...padding(0, 16, 16)
  }
});

export default styles;