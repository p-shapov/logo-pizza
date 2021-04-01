import React from 'react';
import {Pressable, View} from 'react-native';
/* locals */
import SocialLinksProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from '../../globals/constants';
/* icons */
import IcoSocialFb from '../../assets/images/ico_social_fb.svg';
import IcoSocialVk from '../../assets/images/ico_social_vk.svg';
import IcoSocialOk from '../../assets/images/ico_social_ok.svg';
import IcoSocialInst from '../../assets/images/ico_social_inst.svg';
import IcoSocialYt from '../../assets/images/ico_social_yt.svg';

const SocialIcon = ({type, color}: { type: ArrayElement<SocialLinksProps['links']> ['type'], color: string }) => {
  switch (type) {
    case 'fb':
      return (<IcoSocialFb color={color}/>);
    case 'vk':
      return (<IcoSocialVk color={color}/>);
    case 'ok':
      return (<IcoSocialOk color={color}/>);
    case 'inst':
      return (<IcoSocialInst color={color}/>);
    case 'yt':
      return (<IcoSocialYt color={color}/>);
  }
};

const SocialLinks = ({links}: SocialLinksProps) => {
  return (
    <View style={styles.socialLinks}>
      {links.map((item, index) => (
        <Pressable key={index} style={index === links.length - 1 ? styles.socialLinksItemLast : styles.socialLinksItem}>
          <SocialIcon type={item.type} color={COLORS.FOREGROUND_PRIMARY_SUBTLE}/>
        </Pressable>
      ))}
    </View>
  );
};

export {SocialLinks};