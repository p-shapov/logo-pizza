/* libraries and plugins */
import {Platform, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font, margin, padding} from 'globals/helpers';

const styles = StyleSheet.create({
  contacts: {
    ...padding(23, 0, 78)
  },
  contactsHeader: {
    flexDirection: 'row',
    marginBottom: 22,
    ...padding(0, 16)
  },
  contactsDelimiter: {
    height: 1,
    backgroundColor: COLORS.DELIMITER
  },
  contactsTitle: {
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY),
    letterSpacing: .5
  },
  contactsCityPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16
  },
  contactsCityPickerText: {
    marginLeft: 8,
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY_ACTIVE),
    letterSpacing: .5
  },
  contactsMapWrapper: {
    ...margin(0, 16, 20),
    borderRadius: 8,
    ...(Platform.OS === 'ios' ? {
      shadowOpacity: 0.16,
      shadowRadius: 6,
      shadowColor: COLORS.SHADOW
    } : {
      elevation: 1
    }),
    overflow: 'hidden'
  },
  contactsMap: {
    height: 200,
  },
  contactsPoints: {
    marginBottom: 24
  },
  contactsPointPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...padding(16, 16)
  },
  contactsPointPickerButton: {
    alignSelf: 'center',
    width: 104,
    justifyContent: 'center'
  },
  contactsPhone: {
    marginBottom: 14,
    ...padding(0, 16)
  },
  contactsEmail: {
    marginBottom: 32,
    ...padding(0, 16)
  },
  contactsSocials: {
    marginBottom: 32,
    ...padding(0, 16)
  },
  contactsSocialsLabel: {
    marginBottom: 16,
    ...font('regular', 18, 21, COLORS.FOREGROUND_PRIMARY)
  },
  contactsAbout: {
    ...padding(18, 16, 0)
  },
  contactsAboutText: {
    ...font('regular', 16, 19, COLORS.FOREGROUND_PRIMARY)
  }
});

export default styles;