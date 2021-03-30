import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
/* locals */
import ISelect from './interface';
import styles from './styles';
/* globals */
import {COLORS} from '../../globals/constants';
/* shared */
import {Badge} from '../badge';
/* icons */
import IcoArrowExpand from '../../assets/images/ico_arrow_expand.svg';

const Select = (props: ISelect) => {
  const {
    items,
    setActive
  } = props;
  
  const [expanded, setExpanded] = useState(false);
  
  const activeItem = items.reduce((acc, item) => item.isActive ? item.title : acc, '');
  const otherItems = items.reduce((acc, item, index) => !item.isActive
    ? [...acc, {title: item.title, id: index}]
    : acc, [] as Array<{ title: string, id: number }>);
  
  return (
    <View style={styles.selectWrapper}>
      <View style={expanded ? styles.selectExpanded : styles.select}>
        {expanded && (
          <>
            {otherItems.map((item, index) => (
              <Pressable style={styles.selectItem} key={index.toString()}  onPress={() => setActive(item.id)}>
                <Text style={styles.selectItemText}>{item.title}</Text>
              </Pressable>
            ))}
          </>
        )}
        <Pressable style={styles.selectButton} onPress={() => setExpanded(!expanded)}>
          <View style={styles.selectItem}>
            <Badge type={'filled'}>{activeItem}</Badge>
          </View>
          <View style={expanded ? styles.selectButtonIconExpanded : {}}>
            <IcoArrowExpand color={COLORS.SELECT_ICON}/>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export {Select};