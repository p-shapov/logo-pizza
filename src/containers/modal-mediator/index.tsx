/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
/* globals */
import State from 'globals/interface';
/* components */
import ModalMediatorProps from 'components/modal-mediator/interface';
import {ModalMediator} from 'components/modal-mediator/index';

const mapStateToProps = ({ui}: State): { current: ModalMediatorProps['current'] } => ({current: ui.currentModal});

const ModalMediatorContainer = connect(
  mapStateToProps
)((props: ModalMediatorProps) => <ModalMediator {...props}/>);

export {ModalMediatorContainer};