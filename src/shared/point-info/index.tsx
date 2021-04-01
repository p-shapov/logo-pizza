import React from 'react';
import {Text, View} from 'react-native';
/* locals */
import PointInfoProps from './interface';
import styles from './styles';
/* components */
import {Button} from '../button';

const PointInfo = (props: PointInfoProps) => {
  const {
    geo,
    street,
    workTime,
    metroStation,
    openPoint
  } = props;
  
  return (
    <View style={styles.pointInfo}>
      <View>
        {metroStation !== undefined && (
          <View style={styles.pointInfoMetroStation}>
            <metroStation.Icon />
            <Text style={styles.pointInfoMetroStationText}>{metroStation.title}</Text>
          </View>
        )}
        <Text style={styles.pointInfoStreet}>{street}</Text>
        <Text style={styles.pointInfoWorkTime}>{workTime}</Text>
      </View>
      <View style={styles.pointInfoButtonWrapper}>
        <Button type={'secondary'} onPress={() => openPoint(geo)}>Выбрать</Button>
      </View>
    </View>
  );
};

export {PointInfo};