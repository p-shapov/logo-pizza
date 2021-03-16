import React from 'react';
import {Pressable, Text, View} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {Root} from '../../globals/interface';
/* locals */
import {FooterComponent} from './namespace';
import style from './style';
/* icons */
import IcoFooterCatalog from '../../assets/images/ico_footer_catalog.svg';
import IcoFooterContacts from '../../assets/images/ico_footer_contacts.svg';
import IcoFooterPersonalOffice from '../../assets/images/ico_footer_personal_office.svg';
import IcoFooterBasket from '../../assets/images/ico_footer_basket.svg';

const NavButton = (props: FooterComponent.INavButton) => {
  const {
    isActive,
    onPress,
    Icon,
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
          <Icon color={isActive
            ? COLORS.NAV_BUTTON_FOREGROUND_ACTIVE
            : COLORS.NAV_BUTTON_FOREGROUND}/>
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
            }]}>{badgeCount.toString()}</Text>
          </View>}
        </View>
      </View>
    </Pressable>);
};

export default (props: FooterComponent.IFooter) => {
  const {
    mode,
    setMode,
    productsInCartCount
  } = props;
  
  type TNavButtonsArray = Array<{mode: Root.TMode, isActive: boolean, Icon: SvgrComponent, badgeCount?: number}>
  
  const navButtonsArray: TNavButtonsArray = [
    {
      mode: 'CATALOG',
      isActive: mode === 'CATALOG',
      Icon: IcoFooterCatalog
    },
    {
      mode: 'CONTACTS',
      isActive: mode === 'CONTACTS',
      Icon: IcoFooterContacts
    },
    {
      mode: 'PERSONAL_OFFICE',
      isActive: mode === 'PERSONAL_OFFICE',
      Icon: IcoFooterPersonalOffice
    },
    {
      mode: 'BASKET',
      isActive: mode === 'BASKET',
      Icon: IcoFooterBasket,
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