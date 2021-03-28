import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
/* locals */
import ISelect from './interface';
import {Badge} from '../badge';
import styles from './styles';

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
    <View style={styles.select}>
      {expanded && (
        <View>
          {otherItems.map((item, index) => (
            <Pressable key={index.toString()} onPress={() => setActive(item.id)}>
              <Text>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <Pressable onPress={() => setExpanded(!expanded)}>
        <View style={styles.selectItem}>
          <Badge type={'filled'}>{activeItem}</Badge>
        </View>
      </Pressable>
    </View>
  );
};

export {Select};