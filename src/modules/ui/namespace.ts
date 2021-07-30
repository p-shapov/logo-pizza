namespace UiModule {
  export type SetCurrentModal = ({ type: 'SET_CURRENT_MODAL', modal: ModalNames });

  export type SetCurrentNotification = ({ type: 'SET_CURRENT_NOTIFICATION', notification: NotificationNames });

  export type Actions = SetCurrentNotification | SetCurrentModal;

  export interface State {
    currentModal: ModalNames,
    currentNotification: NotificationNames,
    setCurrentModal: (modal: ModalNames) => void,
    setCurrentNotification: (notification: NotificationNames) => void
  }
}

export default UiModule;