interface Point {
  geo: GeoCoordinates,
  street: string,
  workTime: string,
  metroStation?: {
    title: string,
    Icon: SvgrComponent
  }
}

interface ContactsProps {
  title: string,
  city: string,
  mapGeo: GeoCoordinates,
  points: Array<Point>,
  phone: {
    title: string,
    href: string
  },
  email: {
    title: string,
    href: string
  },
  socialLinks: Array<{
    type: SocialMediaType,
    href: string
  }>
  openPoint: (geo: GeoCoordinates) => void
}

export default ContactsProps;