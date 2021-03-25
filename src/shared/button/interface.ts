interface IButton {
  children: string,
  type: 'primary' | 'secondary',
  onPress: () => void
}

export default IButton;