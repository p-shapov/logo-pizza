import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
/* globals */
import {TMode} from '../../globals/types';
import {COLORS} from '../../globals/constants';
/* locals */
import {IFooterComponent, INavButton} from './interface';
import style from './style';

const NavButton = (props: INavButton) => {
  const {
    isActive,
    onPress,
    icon,
    badgeCount
  } = props;
  
  return (
    <Pressable onPress={onPress}>
      <View style={[style.footerTab, {
        backgroundColor: isActive
          ? COLORS.NAV_BUTTON_BACKGROUND_ACTIVE
          : COLORS.NAV_BUTTON_BACKGROUND
      }]}>
        <View style={[style.footerTabBadgeWrapper, {
          paddingRight: badgeCount !== undefined ? 8 : 0
        }]}>
          {icon}
          {badgeCount !== undefined && <View style={[style.footerTabBadge, {
            borderColor: isActive
              ? COLORS.NAV_BUTTON_BACKGROUND_ACTIVE
              : COLORS.NAV_BUTTON_BACKGROUND,
            backgroundColor: badgeCount > 0
              ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
              : COLORS.NAV_BUTTON_FOREGROUND
          }]}>
            <Text style={[style.footerTabBadgeText, {
              color: COLORS.NAV_BUTTON_BACKGROUND
            }]}>{badgeCount}</Text>
          </View>}
        </View>
      </View>
    </Pressable>);
};

const FooterComponent = (props: IFooterComponent) => {
  const {
    mode,
    setMode,
    productsInCartCount
  } = props;
  
  type TNavButtonsArray = Array<{mode: TMode, isActive: boolean, icon: JSX.Element, badgeCount?: number}>;
  
  const navButtonsArray: TNavButtonsArray = [
    {
      mode: 'CATALOG',
      isActive: mode === 'CATALOG',
      icon: <Svg
        width={32}
        height={32}
        viewBox='0 0 32 32'
        fill='none'
      >
        <Path
          d='M4 16h24M4 8h24M4 24h24'
          stroke={mode === 'CATALOG'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    },
    {
      mode: 'CONTACTS',
      isActive: mode === 'CONTACTS',
      icon: <Svg
        width={31}
        height={31}
        viewBox='0 0 31 31'
        fill='none'
      >
        <Path
          d='M27.125 12.917c0 9.041-11.625 16.791-11.625 16.791S3.875 21.958 3.875 12.917a11.625 11.625 0 0123.25 0z'
          stroke={mode === 'CONTACTS'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M15.5 16.792a3.875 3.875 0 100-7.75 3.875 3.875 0 000 7.75z'
          stroke={mode === 'CONTACTS'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    },
    {
      mode: 'PERSONAL_OFFICE',
      isActive: mode === 'PERSONAL_OFFICE',
      icon: <Svg
        width={31}
        height={31}
        viewBox='0 0 31 31'
        fill='none'
      >
        <Path
          d='M25.833 27.125v-2.583a5.167 5.167 0 00-5.166-5.167H10.333a5.166 5.166 0 00-5.166 5.167v2.583M15.5 14.208a5.167 5.167 0 100-10.333 5.167 5.167 0 000 10.333z'
          stroke={mode === 'PERSONAL_OFFICE'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND}
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    },
    {
      mode: 'PRODUCT_CART',
      isActive: mode === 'PRODUCT_CART',
      icon: <Svg width='30' height='29' viewBox='0 0 30 29' fill='none'>
        <Path
          d='M12 26.9995C12 27.5518 11.5523 27.9995 11 27.9995C10.4477 27.9995 10 27.5518 10 26.9995C10 26.4472 10.4477 25.9995 11 25.9995C11.5523 25.9995 12 26.4472 12 26.9995Z'
          stroke={mode === 'PRODUCT_CART'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
        <Path
          d='M27 27C27 27.5523 26.5523 28 26 28C25.4477 28 25 27.5523 25 27C25 26.4477 25.4477 26 26 26C26.5523 26 27 26.4477 27 27Z'
          stroke={mode === 'PRODUCT_CART'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
        <Path
          d='M1 1H6.09091L9.50182 18.8533C9.6182 19.4672 9.93697 20.0186 10.4023 20.4111C10.8677 20.8035 11.45 21.012 12.0473 21H24.4182C25.0155 21.012 25.5978 20.8035 26.0631 20.4111C26.5285 20.0186 26.8473 19.4672 26.9636 18.8533L29 7.66667H7.36364'
          stroke={mode === 'PRODUCT_CART'
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
      </Svg>,
      badgeCount: productsInCartCount
    },
  ];
  
  return (
    <View style={style.footer}>
      {navButtonsArray.map((data, index) => (<NavButton
          {...data}
          key={index}
          onPress={() => setMode(data.mode)}
        />
      ))}
    </View>
  );
  
};

export default FooterComponent;