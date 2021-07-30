/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import {CatalogMediator} from 'components/catalog-mediator/index';
import CatalogMediatorProps from 'components/catalog-mediator/interface';
/* modules */
import {openProduct, openPromotion} from 'modules/catalog/actions';
import {setCurrentModal} from 'modules/ui/actions';

const mapStateToProps = ({catalog}: State): CatalogMediatorProps => ({
  promotions: catalog.promotions,
  categories: catalog.categories.map(category => ({
    name: category.name,
    title: category.title,
    Icon: category.Icon,
    products: category.products.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: 'variants' in product ? product.variants[0].price : product.price,
      hasVariants: 'variants' in product
    }))
  })),
  openProduct: catalog.openProduct,
  openPromotion: catalog.openPromotion
});

const mapDispatchToProps = (dispatch: Dispatch): {
  openProduct: CatalogMediatorProps['openProduct'],
  openPromotion: CatalogMediatorProps['openPromotion']
} => ({
  openProduct(id) {
    dispatch(openProduct(id));
  },
  openPromotion(id) {
    dispatch(openPromotion(id));
    dispatch(setCurrentModal('PROMOTION'));
  }
});

const CatalogMediatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: CatalogMediatorProps) => (<CatalogMediator {...props}/>));

export {CatalogMediatorContainer};