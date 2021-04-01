interface PointInfoProps {
  geo: GeoCoordinates,
  street: string,
  workTime: string,
  metroStation?: {
    title: string,
    Icon: SvgrComponent
  },
  openPoint: (geo: GeoCoordinates) => void
}

export default PointInfoProps;