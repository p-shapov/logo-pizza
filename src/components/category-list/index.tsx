import {FlatList, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
import React, {useRef} from 'react';
/* globals */
import {COLORS} from '../../globals/constants';
/* locals */
import {CategoryListComponent} from './namespace';
import style from './style';

const CategoryItem = (props: CategoryListComponent.ICategoryItem) => {
  const {
    isActive,
    title,
    onPress,
    Icon
  } = props;
  
  return (
    <Pressable onPress={onPress}>
      <View style={style.categoryItem}>
        <Icon color={isActive
          ? COLORS.CATEGORY_ITEM_ICON_FOREGROUND_ACTIVE
          : COLORS.CATEGORY_ITEM_ICON_FOREGROUND}/>
        <Text style={[
          style.categoryItemText,
          {
            color: isActive
              ? COLORS.CATEGORY_ITEM_TEXT_FOREGROUND_ACTIVE
              : COLORS.CATEGORY_ITEM_TEXT_FOREGROUND
          }
        ]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default (props: CategoryListComponent.ICategoryList) => {
  const {
    items,
    setCategory,
    activeCategoryId
  } = props;
  
  const flatListRef = useRef<FlatList<CategoryListComponent.TCategoryItem>>(null);
  
  const renderItem = (data: ListRenderItemInfo<CategoryListComponent.TCategoryItem>) => {
    const isActive = activeCategoryId === data.index;
    
    if (isActive && flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index: data.index, viewPosition: 1});
    }
    
    return (
      <CategoryItem {...data.item} isActive={isActive} onPress={() => setCategory(data.index)}/>
    );
  };
  
  return (
    <FlatList<CategoryListComponent.TCategoryItem>
      ref={flatListRef}
      style={style.categoryList}
      data={items}
      renderItem={renderItem}
      keyExtractor={((_, index) => index.toString())}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}