/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {margin, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  delivery: {
    position: 'relative',
    flexGrow: 1,
    ...padding(24, 0, 0),
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  deliveryGap: {
    width: 8
  },
  deliveryDelimiter: {
    height: 1,
    backgroundColor: COLORS.DELIMITER
  },
  deliveryMethods: {
    flexDirection: 'row',
    ...padding(0, 16),
    marginBottom: 24
  },
  deliveryMethodsButton: {
    flexGrow: 1
  },
  deliveryStreet: {
    marginBottom: 16,
    ...padding(0, 16),
  },
  deliveryHouse: {
    flexDirection: 'row',
    ...padding(0, 16)
  },
  deliveryFlat: {
    flexGrow: 1
  },
  deliveryFloor: {
    flexGrow: 1
  },
  deliveryPoint: {
    ...padding(16, 16)
  },
  deliveryConfirm: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    ...margin(0, 16),
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