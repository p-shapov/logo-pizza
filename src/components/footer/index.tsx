import React from 'react';
import {Pressable, Text, View} from 'react-native';
/* globals */
import {COLORS} from '../../globals/constants';
import {Root} from '../../globals/interface';
/* locals */
import NFooter from './namespace';
import styles from './styles';
/* icons */
import IcoFooterCatalog from '../../assets/images/ico_footer_catalog.svg';
import IcoFooterContacts from '../../assets/images/ico_footer_contacts.svg';
import IcoFooterPersonalOffice from '../../assets/images/ico_footer_personal_office.svg';
import IcoFooterBasket from '../../assets/images/ico_footer_basket.svg';

const NavButton = (props: NFooter.INavButton) => {
  const {
    isActive,
    onPress,
    Icon,
    badgeCount
  } = props;
  
  return (
    <Pressable onPress={onPress}>
      <View style={isActive ? styles.footerTabActive : styles.footerTab}>
        <View style={badgeCount !== undefined ? styles.footerTabBadgeWrapper : {}}>
          <Icon color={isActive
            ? COLORS.FOOTER_BUTTON_FOREGROUND_ACTIVE
            : COLORS.FOOTER_BUTTON_FOREGROUND}/>
          {badgeCount !== undefined && <View style={isActive ? styles.footerTabBadgeActive : styles.footerTabBadge}>
            <Text style={styles.footerTabBadgeText}>{badgeCount.toString()}</Text>
          </View>}
        </View>
      </View>
    </Pressable>);
};

const Footer = (props: NFooter.IFooter) => {
  const {
    mode,
    setMode,
    productsInCartCount
  } = props;
  
  type TNavButtonsArray = Array<{ mode: Root.TMode, isActive: boolean, Icon: SvgrComponent, badgeCount?: number }>
  
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
    <View style={styles.footer}>
      {navButtonsArray.map((data, index) => (
        <NavButton
          {...data}
          key={index}
          onPress={() => setMode(data.mode)}
        />
      ))}
    </View>
  );
};

export {Footer};