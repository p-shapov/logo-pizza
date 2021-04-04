/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding} from 'globals/helpers';

const styles = StyleSheet.create({
  pointInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(16, 16)
  },
  pointInfoMetroStation: {
    flexDirection: 'row'
  },
  pointInfoMetroStationText: {
    marginBottom: 14,
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
  },
  pointInfoButtonWrapper: {
    alignSelf: 'center',
    width: 104,
    justifyContent: 'center'
  }
});

export default styles;