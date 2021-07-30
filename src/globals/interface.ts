/* modules */
import BasketModule from 'modules/basket/namespace';
import CatalogModule from 'modules/catalog/namespace';
import ContactsModule from 'modules/contacts/namespace';
import UiModule from 'modules/ui/namespace';

interface State {
  catalog: CatalogModule.State,
  contacts: ContactsModule.State,
  basket: BasketModule.State,
  ui: UiModule.State
}

export default State;
