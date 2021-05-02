/* libraries and plugins */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* locals */
import WindowMediatorProps from './interface';
/* globals */
import {COLORS} from 'globals/constants';

const WindowMediator = ({windows}: WindowMediatorProps) => {
  const Stack = createStackNavigator();

  return (<Stack.Navigator mode={'modal'}>
    {windows.map(({name, type, Container}, index) => (
      <Stack.Screen
        key={index}
        name={name}
        component={Container}
        options={{
          headerShown: false,
          cardOverlayEnabled: type === 'MODAL',
          cardStyle: {backgroundColor: type === 'MODAL' ? 'transparent' : COLORS.BACKGROUND_PRIMARY},
          cardStyleInterpolator: () => ({
            overlayStyle: {backgroundColor: type === 'MODAL' ? 'transparent' : COLORS.BACKGROUND_PRIMARY}
          })
        }}
      />
    ))}
  </Stack.Navigator>);
};

export {WindowMediator};