import React from 'react';
import {Image, Pressable, SectionList, SectionListRenderItemInfo, Text, View} from 'react-native';
/* locals */
import styles from './styles';
import NProductListing from './namespace';
/* shared */
import {Badge} from '../../shared/badge';

const ProductCard = (props: NProductListing.ICard) => {
  const {
    title,
    description,
    image,
    price,
    multiplePrice,
    onPress
  } = props;
  
  return (
    <Pressable style={styles.productCard} onPress={onPress}>
      <Image style={styles.productCardImage} source={image}/>
      <View style={styles.productCardInfo}>
        <Text style={styles.productCardTitle}>{title}</Text>
        <Text style={styles.productCardDescription}>{description}</Text>
        <Badge type={'shaped'}>
          {multiplePrice ? 'от ' + price.toString() + ' ₽' : price.toString() + ' ₽'}
        </Badge>
      </View>
    </Pressable>
  );
};


const ProductListing = (props: NProductListing.IListing) => {
  const {
    title,
    items,
    openProduct
  } = props;
  
  const renderItem = (data: SectionListRenderItemInfo<NProductListing.TCard>) => {
    return (
      <ProductCard
        {...data.item}
        onPress={() => openProduct(data.item.id)}
      />
    );
  };
  
  return (
    <SectionList
      contentContainerStyle={styles.productListing}
      sections={[{title, data: items}]}
      renderItem={renderItem}
      renderSectionHeader={() => (<Text style={styles.productListingTitle}>{title}</Text>)}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export {ProductListing};