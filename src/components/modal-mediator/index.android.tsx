/* libraries and plugins */
import React from 'react';
import {View} from 'react-native';
/* locals */
import ModalMediatorProps from './interface';
import styles from './styles';

const ModalMediator = ({current, modals}: ModalMediatorProps) => {
  return (current !== null ? (<View style={styles.modalMediator}>
    {modals.map(({name, Container}, index) => name === current
      ? (<Container key={index}/>) : (<React.Fragment key={index}/>))}
  </View>) : (<></>));
};

export {ModalMediator};