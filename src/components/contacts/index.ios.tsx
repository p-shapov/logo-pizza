/* libraries and plugins */
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Pressable, ScrollView, Text, View} from 'react-native';
/* locals */
import ContactsProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {SocialLinks} from 'shared/social-links/index';
import {Link} from 'shared/link/index';
import {PointInfo} from 'shared/point-info/index';
import {Button} from 'shared/button/index';
/* icons */
import IcoContactsPhone from 'images/ico_contacts_phone.svg';
import IcoContactEmail from 'images/ico_contacts_email.svg';
import IcoContactsGeoTag from 'images/ico_contacts_geo_tag.svg';
import IcoContactsArrowNavigation from 'images/ico_contacts_arrow_navigation.svg';

const Contacts = (props: ContactsProps) => {
  const {title, city, mapGeo, points, phone, email, socialLinks, openPoint} = props;
  
  return (<ScrollView contentContainerStyle={styles.contacts}>
    <View style={styles.contactsHeader}>
      <Text style={styles.contactsTitle}>{title}</Text>
      <Pressable style={styles.contactsCityPicker}>
        <IcoContactsArrowNavigation color={COLORS.FOREGROUND_PRIMARY_ACTIVE}/>
        <Text style={styles.contactsCityPickerText}>{city}</Text>
      </Pressable>
    </View>
    <View style={styles.contactsMapWrapper}>
      <MapView
        provider={'google'}
        style={styles.contactsMap}
        region={{
          ...mapGeo,
          latitudeDelta: 0.0012,
          longitudeDelta: 0.0012
        }}
        initialRegion={{
          ...mapGeo,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {points.map((point, index) => (
          <Marker key={index} coordinate={point.geo}>
            <IcoContactsGeoTag color={COLORS.FOREGROUND_PRIMARY_ACTIVE}/>
          </Marker>
        ))}
      </MapView>
    </View>
    <View style={styles.contactsDelimiter}/>
    <View style={styles.contactsPoints}>
      {points.map((point, index) => (<React.Fragment key={index}>
        <View style={styles.contactsPointPicker}>
          <PointInfo {...point.data}/>
          <View style={styles.contactsPointPickerButton}>
            <Button type={'PRIMARY'} view={'SHAPED'} onPress={() => openPoint(point.geo)}>Выбрать</Button>
          </View>
        </View>
        <View style={styles.contactsDelimiter}/>
      </React.Fragment>))}
    </View>
    <View style={styles.contactsPhone}>
      <Link label={'Телефон:'} Icon={IcoContactsPhone} href={phone.href}>{phone.title}</Link>
    </View>
    <View style={styles.contactsEmail}>
      <Link label={'Вопросы, отзывы и предложения:'} Icon={IcoContactEmail} href={email.href}>{email.title}</Link>
    </View>
    <View style={styles.contactsSocials}>
      <Text style={styles.contactsSocialsLabel}>Мы в соцсетях</Text>
      <SocialLinks links={socialLinks}/>
    </View>
    <View style={styles.contactsDelimiter}/>
    <View style={styles.contactsAbout}>
      <Pressable>
        <Text style={styles.contactsAboutText}>О приложении</Text>
      </Pressable>
    </View>
  </ScrollView>);
};

export {Contacts};