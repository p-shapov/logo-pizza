import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
import {createMaterialTopTabNavigator, MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
/* locals */
import CatalogMediatorProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from '../../globals/constants';
/* components */
import {ProductListing} from '../product-listing';
import {PromotionListing} from '../promotion-listing';

const CategoryMenu = ({state, descriptors, navigation}: MaterialTopTabBarProps) => {
  const flatListRef = useRef<FlatList>(null);
  
  setTimeout(() => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({index: state.index, animated: true, viewPosition: .5});
    }
  }, 250);
  
  const renderItem = ({item, index}: ListRenderItemInfo<any>) => {
    const {options} = descriptors[item.key];
    
    const isActive = state.index === index;
    const isLast = state.routes.length - 1 === index;
    
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: item.key,
        canPreventDefault: true,
      });
      
      if (!isActive && !event.defaultPrevented) {
        navigation.navigate(item.name);
      }
    };
    
    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: item.key,
      });
    };
    
    return (
      <Pressable
        key={index}
        style={isLast ? styles.categoryItemLast : styles.categoryItem}
        onPress={onPress}
        onLongPress={onLongPress}
        testID={options.tabBarTestID}
      >
        {options.tabBarIcon && options.tabBarIcon({focused: isActive, color: ''})}
        <Text style={styles.categoryItemText}>{options.tabBarLabel}</Text>
      </Pressable>
    );
  };
  
  return (
    <View>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.categoryList}
        data={state.routes}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const CatalogMediator = (props: CatalogMediatorProps) => {
  const {
    categories,
    promotions,
    openProduct,
    openPromotion
  } = props;
  
  const Tab = createMaterialTopTabNavigator();
  
  return (
    <Tab.Navigator
      tabBar={props => (
        <View>
          <PromotionListing promotions={promotions} openPromotion={openPromotion}/>
          <CategoryMenu {...props}/>
        </View>
      )}
      lazy={true}
    >
      {categories.map((category, index) => (
        <Tab.Screen
          key={index}
          name={category.name}
          options={{
            tabBarLabel: category.title,
            tabBarIcon: ({focused}) => (
              <category.Icon color={focused
                ? COLORS.FOREGROUND_PRIMARY_ACTIVE
                : COLORS.FOREGROUND_PRIMARY}/>
            )
          }}
        >
          {() => (<ProductListing openProduct={openProduct} title={category.title} products={category.products}/>)}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export {CatalogMediator};