/* libraries and plugins */
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
/* globals */
import {State} from 'globals/interface';
/* components */
import ContactsProps from 'components/contacts/interface';
import {Contacts} from 'components/contacts/index';
/* modules */
import {setMapGeo} from 'modules/contacts/actions';

const mapStateToProps = (state: State): ContactsProps => ({
  title: state.contacts.title,
  city: state.contacts.city,
  mapGeo: state.contacts.mapGeo,
  points: state.contacts.points,
  phone: state.contacts.phone,
  email: state.contacts.email,
  socialLinks: state.contacts.socialLinks,
  openPoint: state.contacts.setMapGeo
});

const dispatchStateToProps = (dispatch: Dispatch): {
  openPoint: ContactsProps['openPoint']
} => ({
  openPoint(geo) {
    dispatch(setMapGeo(geo));
  }
});

const ContactsContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)((props: ContactsProps) => (
  <Contacts {...props}/>
));

export {ContactsContainer};