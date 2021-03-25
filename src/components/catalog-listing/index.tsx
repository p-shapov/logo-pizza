import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
/* locals */
import NCatalogListing from './namespace';
/* components */
import {ProductListing} from '../product-listing';
import {CategoryMenu} from '../category-menu';
import {PromotionListing} from '../promotion-listing';


const CatalogListing = (props: NCatalogListing.IListing) => {
  const {
    categories,
    promotions,
    openProduct,
    openPromotion,
    setCategory,
    activeCategoryId,
    activePromotionId
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
      <View>
        <PromotionListing
          items={promotions}
          openPromotion={openPromotion}
          activePromotionId={activeCategoryId}
        />
        <CategoryMenu
          items={categories}
          setCategory={setCategory}
          activeCategoryId={activePromotionId}
        />
      </View>
      <FlatList<NCatalogListing.TCategory>
        data={categories}
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