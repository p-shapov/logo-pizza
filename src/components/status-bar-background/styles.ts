/* libraries and plugins */
import {Platform, StatusBar, StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.STATUS_BAR_BACKGROUND_COLOR
  }
});

export default styles;
