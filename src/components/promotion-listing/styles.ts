import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  promotionListing: {
    ...padding(20, 16),
    backgroundColor: COLORS.BACKGROUND_SECONDARY
  },
  promotionCard: {
    ...padding(0, 15, 0, 0)
  },
  promotionCardLast: {
    padding: 0
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
    color: COLORS.FOREGROUND_SECONDARY
  }
});

export default styles;