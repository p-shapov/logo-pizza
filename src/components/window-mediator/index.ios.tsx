/* libraries and plugins */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* locals */
import WindowMediatorProps from './interface';

const WindowMediator = ({windows}: WindowMediatorProps) => {
  const Stack = createStackNavigator();

  return (<Stack.Navigator mode={'modal'}>
    {windows.map(({name, Container}, index) => (
      <Stack.Screen
        key={index}
        name={name}
        component={Container}
        options={{
          headerShown: false
        }}
      />
    ))}
  </Stack.Navigator>);
};

export {WindowMediator};