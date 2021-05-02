/* libraries and plugins */
import React, {useEffect, useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* locals */
import styles from './styles';
import TabMediatorProps from './interface';
/* globals */
import {COLORS} from 'globals/constants';

const TabBar = ({state, descriptors, navigation, keyboardHidesTabBar}: BottomTabBarProps) => (!keyboardHidesTabBar
  ? (<View style={styles.tabBar}>
    {state.routes.map((item, index) => {
      const {options} = descriptors[item.key];
      const active = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: item.key,
          canPreventDefault: true,
        });

        if (!active && !event.defaultPrevented) {
          navigation.navigate(item.name);
        }
      };

      const onLongPress = () => navigation.emit({
        type: 'tabLongPress',
        target: item.key,
      });

      return (<Pressable
        key={index}
        onPress={onPress}
        onLongPress={onLongPress}
        style={active ? styles.tabButtonActive : styles.tabButton}
      >
        {options.tabBarIcon && options.tabBarIcon({focused: active, color: '', size: 0})}
        {options.tabBarBadge !== undefined && (<View style={active
          ? options.tabBarBadge === 0 ? styles.tabBadgeFocused : styles.tabBadgeFocusedActive
          : options.tabBarBadge === 0 ? styles.tabBadge : styles.tabBadgeActive}>
          <Text style={styles.tabBadgeText}>{options.tabBarBadge}</Text>
        </View>)}
      </Pressable>);
    })}
  </View>)
  : (<></>));

const TabMediator = ({screens, productInCartCount}: TabMediatorProps) => {
  const [keyboardShown, setKeyboardShown] = useState<boolean>(false);

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true));
  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false));

  useEffect(() => () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
  });

  const Tab = createBottomTabNavigator();

  return (<Tab.Navigator
    sceneContainerStyle={styles.screen}
    tabBarOptions={{
      showLabel: false,
      keyboardHidesTabBar: keyboardShown
    }}
    tabBar={TabBar}
  >
    {screens.map(({name, Icon, Container}, index) => (<Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Icon color={focused ? COLORS.FOREGROUND_PRIMARY_ACTIVE : COLORS.FOREGROUND_PRIMARY}/>),
        tabBarBadge: name === 'BASKET' ? productInCartCount : undefined
      }}
      key={index}
      name={name}
      component={Container}
    />))}
  </Tab.Navigator>);
};

export {TabMediator};