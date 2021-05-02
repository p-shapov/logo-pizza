type Point = {
  id: number,
  checked: boolean,
  data: {
    street: string,
    workTime: string,
    metroStation?: {
      title: string,
      Icon: SvgrComponent
    }
  }
}

type Address = {
  street: string,
  floor: string,
  flat: string
}

interface DeliveryProps {
  method: 'CURRIER' | 'PICKUP',
  address: Address,
  pickupPoints: Array<Point>,
  setMethod: (method: 'CURRIER' | 'PICKUP') => void,
  setAddress: (address: Address) => void,
  setPoint: (id: number) => void
}

export default DeliveryProps;