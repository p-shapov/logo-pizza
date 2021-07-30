/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font} from 'globals/helpers';

const styles = StyleSheet.create({
  pointInfoMetroStation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  pointInfoMetroStationIcon: {
    marginRight: 8
  },
  pointInfoMetroStationText: {
    ...font('semi-bold', 12, 18, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  pointInfoStreet: {
    marginBottom: 8,
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  },
  pointInfoWorkTime: {
    ...font('regular', 11, 18, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  }
});

export default styles;