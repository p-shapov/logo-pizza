/* modules */
import BasketModule from 'modules/basket/namespace';
import CatalogModule from 'modules/catalog/namespace';
import ContactsModule from 'modules/contacts/namespace';

interface State {
  catalog: CatalogModule.State,
  contacts: ContactsModule.State,
  basket: BasketModule.State
}

export default State;
