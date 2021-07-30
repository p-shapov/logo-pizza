/* libraries and plugins */
import {Dimensions, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  productListing: {
    width: Dimensions.get('window').width,
    ...padding(16, 16, 0),
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  productListingTitle: {
    marginBottom: 32,
    ...font('semi-bold', 24, 32, COLORS.FOREGROUND_PRIMARY)
  },
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
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  productCardDescription: {
    marginBottom: 16,
    ...font('regular', 12, 18, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  }
});

export default styles;