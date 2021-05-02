interface ConfirmationProps {
  orderInfo: {
    confirmed: boolean,
    number: string
  },
  confirm: () => void
}

export default ConfirmationProps;