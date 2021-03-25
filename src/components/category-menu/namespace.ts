namespace NCategoryMenu {
  export type TItem = {
    title: string,
    Icon: SvgrComponent
  }
  
  export interface IItem extends TItem {
    isActive: boolean,
    onPress: () => void
  }
  
  export interface IMenu {
    items: Array<TItem>,
    setCategory: (id: number) => void,
    activeCategoryId: number
  }
}

export default NCategoryMenu;