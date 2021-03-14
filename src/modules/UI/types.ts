export type TMode = 'CATALOG' | 'CONTACTS'| 'PERSONAL_OFFICE' | 'PRODUCT_CART';

export interface IUIActionSetMode {
  type: 'SET_MODE',
  mode: TMode
}

export type TUIActionTypes = IUIActionSetMode;

export interface IUIState {
  mode: TMode,
  setMode: (mode: TMode) => void
}