import React from 'react';
import {connect} from 'react-redux';
/* globals */
import {Root} from '../../globals/interface';
/* components */
import {TabMediator} from '../../components/tab-mediator';
import ITabMediator from '../../components/tab-mediator/interface';

const mapStateToProps = (state: Root.IState): { mode: ITabMediator['mode'] } => ({
  mode: state.ui.mode
});

const TabMediatorContainer = connect(
  mapStateToProps
)((props: ITabMediator) => (
  <TabMediator {...props}/>
));

export {TabMediatorContainer};