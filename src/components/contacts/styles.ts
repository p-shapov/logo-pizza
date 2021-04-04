/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {padding, margin} from 'globals/helpers';

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
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY
  },
  contactsCityPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16
  },
  contactsCityPickerText: {
    marginLeft: 8,
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  contactsMapWrapper: {
    ...margin(0, 16, 20),
    borderRadius: 8,
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowColor: COLORS.SHADOW,
    elevation: 1,
    overflow: 'hidden'
  },
  contactsMap: {
    height: 200,
  },
  contactsPoints: {
    marginBottom: 24
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
    fontFamily: 'Rubik',
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.FOREGROUND_PRIMARY
  },
  contactsAbout: {
    ...padding(18, 16, 0)
  },
  contactsAboutText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FOREGROUND_PRIMARY
  }
});

export default styles;