import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
/* locals */
import NCatalogListing from './namespace';
/* components */
import {ProductListing} from '../product-listing';
import {CategoryMenu} from '../category-menu';


const CatalogListing = (props: NCatalogListing.IListing) => {
  const {
    items,
    openProduct,
    setCategory,
    activeCategoryId
  } = props;
  
  const renderItem = (data: ListRenderItemInfo<NCatalogListing.TCategory>) => {
    const {
      title,
      items
    } = data.item;
    
    return (
      <ProductListing
        title={title}
        items={items}
        openProduct={openProduct}
      />
    );
  };
  
  return (
    <>
      <CategoryMenu
        items={items}
        setCategory={setCategory}
        activeCategoryId={activeCategoryId}
      />
      <FlatList<NCatalogListing.TCategory>
        data={items}
        renderItem={renderItem}
        initialNumToRender={1}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );
};

export {CatalogListing};