interface SelectProps {
  items: Array<{ title: string, isActive: boolean }>,
  setActive: (id: number) => void
}

export default SelectProps;