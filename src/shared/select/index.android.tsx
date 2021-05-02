/* libraries and plugins */
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
/* locals */
import SelectProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {Badge} from 'shared/badge/index';
/* icons */
import IcoArrowExpand from 'images/ico_arrow_expand.svg';

const Select = ({items, setActive}: SelectProps) => {
  const [expanded, setExpanded] = useState(false);

  const activeItem = items.reduce((acc, item) => item.isActive ? item.title : acc, '');
  const otherItems = items.reduce((acc, item, index) => !item.isActive
    ? [...acc, {title: item.title, id: index}]
    : acc, [] as Array<{ title: string, id: number }>);

  return (<View style={styles.selectWrapper}>
    <View style={expanded ? styles.selectExpanded : styles.select}>
      {expanded && (<>
        {otherItems.map((item, index) => (
          <Pressable style={styles.selectItem} key={index.toString()} onPress={() => setActive(item.id)}>
            <Text style={styles.selectItemText}>{item.title}</Text>
          </Pressable>
        ))}
      </>)}
      <Pressable style={styles.selectButton} onPress={() => setExpanded(!expanded)}>
        <View style={styles.selectItem}>
          <Badge type={'FILLED'}>{activeItem}</Badge>
        </View>
        <View style={expanded ? styles.selectButtonIconExpanded : {}}>
          <IcoArrowExpand color={COLORS.FOREGROUND_PRIMARY_ACTIVE}/>
        </View>
      </Pressable>
    </View>
  </View>);
};

export {Select};