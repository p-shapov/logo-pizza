namespace ContactsModule {
  export interface Point {
    street: string,
    workTime: string,
    geo: GeoCoordinates,
    metroStation?: {
      title: string,
      Icon: SvgrComponent
    }
  }
  
  export interface Social {
    type: SocialMediaType,
    href: string
  }
  
  export interface SetMapGeo {
    type: 'SET_MAP_GEO',
    geo: GeoCoordinates
  }
  
  export type Actions = SetMapGeo;
  
  export interface State {
    city: string,
    title: string,
    mapGeo: {
      longitude: number,
      latitude: number
    },
    points: Array<Point>,
    phone: string,
    email: string,
    socialLinks: Array<Social>,
    aboutLink: string,
    setMapGeo: (geo: GeoCoordinates) => void
  }
}

export {ContactsModule};