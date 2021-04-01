import {ContactsModule} from './namespace';
/* variables */
import contactsVariable from '../../variables/contacts.variable';

const initialState: ContactsModule.State = {
  title: contactsVariable.title,
  city: contactsVariable.city,
  mapGeo: contactsVariable.mapGeo,
  points: contactsVariable.points,
  phone: contactsVariable.phone,
  email: contactsVariable.email,
  socialLinks: contactsVariable.socialLinks.map((link) => link as ContactsModule.Social),
  aboutLink: contactsVariable.aboutLink,
  setMapGeo: (geo) => console.log(geo)
};

export default (state: ContactsModule.State = initialState, action: ContactsModule.Actions) => {
  switch (action.type) {
    case 'SET_MAP_GEO':
      return ({...state, mapGeo: action.geo});
    default:
      return state;
  }
}

