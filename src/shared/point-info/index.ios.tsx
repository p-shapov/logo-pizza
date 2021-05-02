/* libraries and plugins */
import React from 'react';
import {Text, View} from 'react-native';
/* locals */
import PointInfoProps from './interface';
import styles from './styles';

const PointInfo = (props: PointInfoProps) => {
  const {street, workTime, metroStation} = props;

  return (<View>
    {metroStation !== undefined && (<View style={styles.pointInfoMetroStation}>
      <View style={styles.pointInfoMetroStationIcon}>
        <metroStation.Icon/>
      </View>
      <Text style={styles.pointInfoMetroStationText}>{metroStation.title}</Text>
    </View>)}
    <Text style={styles.pointInfoStreet}>{street}</Text>
    <Text style={styles.pointInfoWorkTime}>{workTime}</Text>
  </View>);
};

export {PointInfo};