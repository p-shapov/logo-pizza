import {FlatList, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
/* globals */
import {COLORS} from '../../globals/constants';
/* locals */
import NCategoryMenu from './namespace';
import styles from './styles';

const CategoryItem = (props: NCategoryMenu.IItem) => {
  const {
    title,
    isActive,
    onPress,
    Icon
  } = props;
  
  const [pressed, setPressed] = useState<boolean>(false);
  
  
  return (
    <Pressable
      style={{opacity: pressed ? .3 : 1}}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={styles.categoryItem}>
        <Icon color={isActive
          ? COLORS.CATEGORY_ITEM_ICON_FOREGROUND_ACTIVE
          : COLORS.CATEGORY_ITEM_ICON_FOREGROUND}/>
        <Text style={isActive
          ? styles.categoryItemTextActive
          : styles.categoryItemText
        }>{title}</Text>
      </View>
    </Pressable>
  );
};

const CategoryMenu = (props: NCategoryMenu.IMenu) => {
  const {
    items,
    setCategory,
    activeCategoryId
  } = props;
  
  const flatListRef = useRef<FlatList<NCategoryMenu.TItem>>(null);
  
  const handlePress = (id: number) => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index: id, viewPosition: .5});
    }
    
    setCategory(id);
  };
  
  const renderItem = (data: ListRenderItemInfo<NCategoryMenu.TItem>) => {
    const isActive = activeCategoryId === data.index;
    const isLast = items.length - 1 === data.index;
    
    return (
      <View style={!isLast ? styles.categoryItemWrapper : styles.categoryItemWrapperLast}>
        <CategoryItem
          {...data.item}
          isActive={isActive}
          onPress={() => handlePress(data.index)}
        />
      </View>
    );
  };
  
  return (
    <FlatList<NCategoryMenu.TItem>
      ref={flatListRef}
      style={{flexShrink: 0}}
      contentContainerStyle={styles.categoryList}
      data={items}
      renderItem={renderItem}
      keyExtractor={((_, index) => index.toString())}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

export {CategoryMenu};