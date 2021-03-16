import React, {useRef} from 'react';
import {FlatList, Image, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
/* locals */
import {PromotionListingComponent} from './namespace';
import style from './style';

const PromotionCard = (props: PromotionListingComponent.IPromotionCard) => {
  const {
    title,
    image,
    onPress
  } = props;
  
  return (
    <Pressable onPress={onPress}>
      <View style={style.promotionCard}>
        <Image style={style.promotionCardImage} source={image}/>
        <Text style={style.promotionCardTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default (props: PromotionListingComponent.IPromotionListing) => {
  const {
    items,
    openPromotion,
    activePromotionId
  } = props;
  
  const flatListRef = useRef<FlatList<PromotionListingComponent.TPromotionCard>>(null);
  
  const renderItem = (data: ListRenderItemInfo<PromotionListingComponent.TPromotionCard>) => {
    const isActive = activePromotionId === data.index;
    
    if (isActive && flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index: data.index, viewPosition: 0.5});
    }
    
    return (
      <PromotionCard
        {...data.item}
        onPress={() => openPromotion(data.index)}
      />
    );
  };
  
  return (
    <FlatList<PromotionListingComponent.TPromotionCard>
      ref={flatListRef}
      style={style.promotionListing}
      data={items}
      renderItem={renderItem}
      keyExtractor={((_, index) => index.toString())}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}