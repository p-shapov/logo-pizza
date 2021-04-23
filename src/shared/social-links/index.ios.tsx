/* libraries and plugins */
import React from 'react';
import {Linking, Pressable, View} from 'react-native';
/* locals */
import SocialLinksProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* icons */
import IcoSocialFb from 'images/ico_social_fb.svg';
import IcoSocialVk from 'images/ico_social_vk.svg';
import IcoSocialOk from 'images/ico_social_ok.svg';
import IcoSocialInst from 'images/ico_social_inst.svg';
import IcoSocialYt from 'images/ico_social_yt.svg';

const SocialIcon = ({type, color}: { type: ArrayElement<SocialLinksProps['links']> ['type'], color: string }) => {
  switch (type) {
    case 'FB':
      return (<IcoSocialFb color={color}/>);
    case 'VK':
      return (<IcoSocialVk color={color}/>);
    case 'OK':
      return (<IcoSocialOk color={color}/>);
    case 'INST':
      return (<IcoSocialInst color={color}/>);
    case 'YT':
      return (<IcoSocialYt color={color}/>);
  }
};

const SocialLinks = ({links}: SocialLinksProps) => {
  const onPress = (href: string) => Linking.openURL(href);
  
  return (<View style={styles.socialLinks}>
    {links.map((item, index) => (
      <Pressable
        key={index}
        style={index === links.length - 1 ? styles.socialLinksItemLast : styles.socialLinksItem}
        onPress={() => onPress(`https://${item.href}`)}
      >
        <SocialIcon type={item.type} color={COLORS.FOREGROUND_PRIMARY_SUBTLE}/>
      </Pressable>
    ))}
  </View>);
};

export {SocialLinks};