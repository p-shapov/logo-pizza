namespace ContactsModule {
  export type SetMapGeo = {
    type: 'SET_MAP_GEO',
    geo: GeoCoordinates
  }

  export type Actions = SetMapGeo;

  export type Point = {
    street: string,
    workTime: string,
    geo: GeoCoordinates,
    metroStation?: {
      title: string,
      Icon: SvgrComponent
    }
  }

  export type Social = {
    type: SocialMediaType,
    href: string
  }

  export interface State {
    city: string,
    title: string,
    mapGeo: {
      longitude: number,
      latitude: number
    },
    points: Array<Point>,
    phone: {
      title: string,
      href: string
    },
    email: {
      title: string,
      href: string
    },
    socialLinks: Array<Social>,
    aboutLink: string,
    setMapGeo: (geo: GeoCoordinates) => void
  }
}

export default ContactsModule;