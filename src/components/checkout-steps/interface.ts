/* libraries and plugins */
import {ReactNode} from 'react';

interface CheckoutMediatorProps {
  active: 'DELIVERY' | 'PAYMENT',
  children: ReactNode
}

export default CheckoutMediatorProps;