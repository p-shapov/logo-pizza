export namespace CategoryListComponent {
  export type TCategoryItem = {
    title: string,
    Icon: SvgrComponent
  }
  
  export interface ICategoryItem extends TCategoryItem {
    isActive: boolean,
    onPress: () => void
  }
  
  export interface ICategoryList {
    items: Array<TCategoryItem>,
    setCategory: (id: number) => void,
    activeCategoryId: number
  }
}