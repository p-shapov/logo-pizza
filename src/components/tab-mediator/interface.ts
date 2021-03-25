import {Root} from '../../globals/interface';
import {ReactNode} from 'react';

interface ITabMediator {
  mode: Root.TMode,
  catalogTabContent: ReactNode,
  contactsTabContent: ReactNode,
  personalOfficeTabContent: ReactNode,
  basketTabContent: ReactNode
}

export default ITabMediator;