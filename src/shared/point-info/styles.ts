/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';

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
    fontFamily: 'Rubik-SemiBold',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  pointInfoStreet: {
    marginBottom: 8,
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  },
  pointInfoWorkTime: {
    fontFamily: 'Rubik',
    fontSize: 11,
    lineHeight: 18,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  }
});

export default styles;