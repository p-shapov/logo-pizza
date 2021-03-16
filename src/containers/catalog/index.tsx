import React from 'react';
/* components */
import Catalog from '../../components/catalog';
import {CatalogComponent} from '../../components/catalog/namespace';
import {connect} from 'react-redux';
import {Root} from '../../globals/interface';
import {Dispatch} from 'redux';
import {setCategory} from '../../modules/catalog/actions';


const CatalogContainer = (props: CatalogComponent.ICatalog) => (
  <Catalog {...props} />
);