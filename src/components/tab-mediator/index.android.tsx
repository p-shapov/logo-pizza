/* libraries and plugins */
import React from 'react';
import {Pressable, View} from 'react-native';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* locals */
import styles from './styles';
import TabMediatorProps from './interface';
/* globals */
import {COLORS} from 'globals/constants';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => (
  <View style={styles.tabBar}>
    {
      state.routes.map((item, index) => {
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
        
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: item.key,
          });
        };
        
        return (
          <Pressable
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={active ? styles.tabButtonActive : styles.tabButton}
          >{options.tabBarIcon && options.tabBarIcon({focused: active, color: '', size: 0})}</Pressable>
        );
      })
    }
  </View>
);

const TabMediator = (props: TabMediatorProps) => {
  const {
    screens
  } = props;
  
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.screen}
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
      tabBar={TabBar}
    >
      {screens.map((screen, index) => (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <screen.Icon color={focused ? COLORS.FOREGROUND_PRIMARY_ACTIVE : COLORS.FOREGROUND_PRIMARY}/>
            )
          }}
          key={index}
          name={screen.name}
          component={screen.Container}
        />
      ))}
    </Tab.Navigator>
  );
};

export {TabMediator};