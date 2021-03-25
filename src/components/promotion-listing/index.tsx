import React, {useRef} from 'react';
import {FlatList, Image, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
/* locals */
import NPromotionListing from './namespace';
import styles from './styles';

const PromotionCard = (props: NPromotionListing.ICard) => {
  const {
    title,
    image,
    isLast,
    onPress
  } = props;
  
  return (
    <Pressable style={isLast ? styles.promotionCardLast : styles.promotionCard} onPress={onPress}>
      <View>
        <Image style={styles.promotionCardImage} source={image}/>
        <Text style={styles.promotionCardTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};

const PromotionListing = (props: NPromotionListing.IListing) => {
  const {
    items,
    openPromotion
  } = props;
  
  const flatListRef = useRef<FlatList<NPromotionListing.TCard>>(null);
  
  const handlePress = (id: number) => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: true, index: id, viewPosition: 0.5});
    }
    
    openPromotion(id);
  };
  
  const renderItem = (data: ListRenderItemInfo<NPromotionListing.TCard>) => {
    const isLast = items.length - 1 === data.index;
    
    return (
      <PromotionCard
        {...data.item}
        isLast={isLast}
        onPress={() => handlePress(data.index)}
      />
    );
  };
  
  return (
    <FlatList<NPromotionListing.TCard>
      ref={flatListRef}
      contentContainerStyle={styles.promotionListing}
      data={items}
      renderItem={renderItem}
      keyExtractor={((_, index) => index.toString())}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

export {PromotionListing};