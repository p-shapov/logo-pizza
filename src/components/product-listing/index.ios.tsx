/* libraries and plugins */
import React, {useRef} from 'react';
import {FlatList, Image, ListRenderItemInfo, Pressable, Text, View} from 'react-native';
import {useNavigation, useScrollToTop} from '@react-navigation/native';
/* locals */
import styles from './styles';
import ProductListingProps from './interface';
/* shared */
import {Badge} from 'shared/badge/index';

const ProductListing = (props: ProductListingProps) => {
  const {title, products, openProduct} = props;

  const flatListRef = useRef<FlatList>(null);

  const navigation = useNavigation();

  useScrollToTop(flatListRef);

  const goToProductInfo = () => navigation.navigate('CATALOG', {screen: 'PRODUCT_INFO'});

  const renderItem = (data: ListRenderItemInfo<ArrayElement<ProductListingProps['products']>>) => {
    const {id, title, description, price, hasVariants, image} = data.item;

    const openProductAndGoToProductInfo = () => {
      openProduct(id);
      goToProductInfo();
    };

    return (<Pressable style={styles.productCard} onPress={openProductAndGoToProductInfo}>
      <Image style={styles.productCardImage} source={image}/>
      <View style={styles.productCardInfo}>
        <Text style={styles.productCardTitle}>{title}</Text>
        <Text style={styles.productCardDescription}>{description}</Text>
        <Badge type={'SHAPED'}>
          {hasVariants ? 'от ' + price + ' ₽' : price + ' ₽'}
        </Badge>
      </View>
    </Pressable>);
  };

  return (<FlatList
    ref={flatListRef}
    contentContainerStyle={styles.productListing}
    data={products}
    renderItem={renderItem}
    ListHeaderComponent={() => (<Text style={styles.productListingTitle}>{title}</Text>)}
    decelerationRate={'fast'}
    keyExtractor={(_, index) => index.toString()}
  />);
};

export {ProductListing};