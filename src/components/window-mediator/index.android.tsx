/* libraries and plugins */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* locals */
import WindowMediatorProps from './interface';

const WindowMediator = (props: WindowMediatorProps) => {
  const {
    windows
  } = props;
  
  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator mode={'modal'}>
      {windows.map((window, index) => (
        <Stack.Screen
          key={index}
          name={window.name}
          component={window.Container}
          options={{
            headerShown: false
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export {WindowMediator};