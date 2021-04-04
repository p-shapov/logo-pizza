/* libraries and plugins */
import React, {useRef} from 'react';
import {FlatList, Image, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
/* locals */
import PromotionListingProps from './interface';
import styles from './styles';

const PromotionListing = (props: PromotionListingProps) => {
  const {
    promotions,
    openPromotion
  } = props;
  
  const flatListRef = useRef<FlatList>(null);
  
  const renderItem = (data: ListRenderItemInfo<ArrayElement<PromotionListingProps['promotions']>>) => {
    const {
      id,
      title,
      image
    } = data.item;
    
    const isLast = promotions.length - 1 === data.index;
    
    const onPress = () => {
      if (flatListRef && flatListRef.current) {
        flatListRef.current.scrollToIndex({animated: true, index: data.index, viewPosition: 0.5});
      }
      
      openPromotion(id);
    };
    
    return (
      <Pressable style={isLast ? styles.promotionCardLast : styles.promotionCard} onPress={onPress}>
        <View>
          <Image style={styles.promotionCardImage} source={image}/>
          <Text style={styles.promotionCardTitle}>{title}</Text>
        </View>
      </Pressable>
    );
  };
  
  return (
    <FlatList
      ref={flatListRef}
      contentContainerStyle={styles.promotionListing}
      data={promotions}
      renderItem={renderItem}
      keyExtractor={((_, index) => index.toString())}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};

export {PromotionListing};