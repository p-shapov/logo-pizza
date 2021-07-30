/* locals */
import UiModule from './namespace';

export const setCurrentModal = (modal: ModalNames): UiModule.SetCurrentModal => ({type: 'SET_CURRENT_MODAL', modal});

export const setCurrentNotification = (notification: NotificationNames): UiModule.SetCurrentNotification => ({type: 'SET_CURRENT_NOTIFICATION', notification});