/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* gloabls */
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  modalMediator: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BACKGROUND_MODAL
  }
});

export default styles;