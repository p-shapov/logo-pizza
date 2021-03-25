import React from 'react';
/* locals */
import ITabMediator from './interface';

const TabMediator = (props: ITabMediator) => {
  const {
    mode,
    catalogTabContent,
    contactsTabContent,
    personalOfficeTabContent,
    basketTabContent
  } = props;
  
  const getActiveTab = () => {
    switch (mode) {
      case 'CATALOG':
        return catalogTabContent;
      case 'CONTACTS':
        return contactsTabContent;
      case 'PERSONAL_OFFICE':
        return personalOfficeTabContent;
      case 'BASKET':
        return basketTabContent;
    }
  };
  
  return (
    <>{getActiveTab()}</>
  );
};

export {TabMediator};