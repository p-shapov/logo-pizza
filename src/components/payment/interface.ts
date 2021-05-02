type ContactInfo = {
  name: string,
  phone: string
}

interface PaymentProps {
  deliveryMethod: 'CURRIER' | 'PICKUP',
  paymentMethod: 'CASH' | 'CARD',
  wishesForOrder: string,
  contactInfo: ContactInfo,
  setPaymentMethod: (method: 'CASH' | 'CARD') => void,
  setContactInfo: (info: ContactInfo) => void,
  setWishesForOrder: (wishes: string) => void,
  checkout: () => void
}

export default PaymentProps;