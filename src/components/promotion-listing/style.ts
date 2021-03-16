import {StyleSheet} from 'react-native';
import {padding} from '../../globals/helpers';
import {COLORS, CONTAINER_PADDING} from '../../globals/constants';

export default StyleSheet.create({
  promotionListing: {
    flexGrow: 0,
    ...padding(20, CONTAINER_PADDING - 10),
    backgroundColor: COLORS.PROMOTION_LISTING_BACKGROUND
  },
  promotionCard: {
    ...padding(0, 10)
  },
  promotionCardImage: {
    width: 272,
    height: 140,
    borderRadius: 8
  },
  promotionCardTitle: {
    marginTop: 14,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.PROMOTION_LISTING_FOREGROUND
  }
})