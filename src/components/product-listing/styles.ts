import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {padding} from '../../globals/helpers';

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  productCardImage: {
    width: 160,
    height: 160
  },
  productCardInfo: {
    alignItems: 'flex-start',
    width: 152
  },
  productCardTitle: {
    marginBottom: 8,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.PRODUCT_CARD_TITLE_FOREGROUND
  },
  productCardDescription: {
    marginBottom: 16,
    fontFamily: 'Rubik, sans-serif',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.PRODUCT_CARD_DESCRIPTION_FOREGROUND
  },
  productListing: {
    width: Dimensions.get('window').width,
    ...padding(16, 16, 0)
  },
  productListingTitle: {
    marginBottom: 32,
    fontFamily: 'Rubik-SemiBold, sans-serif',
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.PRODUCT_LISTING_TITLE_FOREGROUND
  },
});

export default styles;