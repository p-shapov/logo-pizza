/* libraries and plugins */
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
/* locals */
import WindowMediatorProps from './interface';

const WindowMediator = ({windows}: WindowMediatorProps) => {
  const Stack = createNativeStackNavigator();

  return (<Stack.Navigator>
    {windows.map(({name, Container}, index) => (<Stack.Screen
      key={index}
      name={name}
      component={Container}
      options={{headerShown: false}}
    />))}
  </Stack.Navigator>);
};

export {WindowMediator};