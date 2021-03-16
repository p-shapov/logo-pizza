import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* modules */
import {setCategory} from '../../modules/catalog/actions';
/* components */
import {CategoryListComponent} from '../../components/category-list/namespace';
import CategoryList from '../../components/category-list';

const mapStateToProps = (state: Root.IState): CategoryListComponent.ICategoryList => ({
  items: state.catalog.categories.map((category) => ({
    title: category.title,
    Icon: category.Icon
  })),
  activeCategoryId: state.catalog.activeCategoryId,
  setCategory: state.catalog.setCategory
});

const mapDispatchToProps = (dispatch: Dispatch): { setCategory: CategoryListComponent.ICategoryList['setCategory'] } => ({
  setCategory(id: number) {
    dispatch(setCategory(id));
  }
});

const CategoryListContainer = (props: CategoryListComponent.ICategoryList) => (
  <CategoryList {...props} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer);