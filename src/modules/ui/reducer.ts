/* locals */
import UiModule from './namespace';

const initialState: UiModule.State = {
  currentModal: null,
  currentNotification: null,
  setCurrentModal: (modal) => console.log(modal),
  setCurrentNotification: (notification) => console.log(notification)
};

export default (state: UiModule.State = initialState, action: UiModule.Actions): UiModule.State => {
  switch (action.type) {
    case 'SET_CURRENT_MODAL': {
      return ({...state, currentModal: action.modal});
    }
    case 'SET_CURRENT_NOTIFICATION': {
      return ({...state, currentNotification: action.notification});
    }
    default: {
      return (state);
    }
  }
}