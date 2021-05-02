/* locals */
import ContactsModule from './namespace';

export const setMapGeo = (geo: GeoCoordinates): ContactsModule.SetMapGeo => ({type: 'SET_MAP_GEO', geo});