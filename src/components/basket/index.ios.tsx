/* libraries and plugins */
import React from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import BasketProps from './interface';
import styles from './styles';
/* shared */
import {Button} from 'shared/button/index';
import {Counter} from 'shared/counter/index';
/* icons */
import IcoBasketTrash from 'images/ico_basket_trash.svg';
/* images */
import ImgBasketIsEmpty from 'images/img_basket_is_empty.png';

const Basket = (props: BasketProps) => {
  const {
    products,
    discount,
    setProductCount,
    deleteProduct
  } = props;
  
  const navigation = useNavigation();
  
  const totalPrice = products.reduce((acc, {price, count}) => (acc + (price * count)), 0);
  const isEmpty = products.length === 0;
  
  const renderItem = ({item}: ListRenderItemInfo<ArrayElement<BasketProps['products']>>) => {
    const {
      id,
      title,
      price,
      count,
      image,
      size
    } = item;
    
    return (
      <View style={styles.basketProductCard}>
        <Image style={styles.basketProductCardImage} source={image}/>
        <View style={styles.basketProductCardInfo}>
          <View style={styles.basketProductCardHeader}>
            <View>
              <Text style={styles.basketProductCardTitle}>{title}</Text>
              {size && (<Text style={styles.basketProductCardSize}>{size}</Text>)}
            </View>
            <View>
              <Text style={discount
                ? styles.basketProductCardPriceActive
                : styles.basketProductCardPrice}
              >{price} ₽</Text>
              {discount && (
                <Text style={styles.basketProductCardOldPrice}>{price * (1 - 0.01 * discount)} ₽</Text>
              )}
            </View>
          </View>
          <View style={styles.basketProductCardFooter}>
            <Button type={'disabled'} onPress={() => deleteProduct(id, size)} Icon={IcoBasketTrash}/>
            <Counter count={count} maxCount={10} onChange={(count) => setProductCount(id, count, size)}/>
          </View>
        </View>
      </View>
    );
  };
  
  return (
    <View style={styles.basket}>
      <View style={styles.basketHeader}>
        <Text style={styles.basketHeaderText}>Корзина</Text>
      </View>
      <View style={styles.basketDelimiter}/>
      {!isEmpty
        ? (<FlatList
          data={products}
          renderItem={renderItem}
          contentContainerStyle={styles.basketProducts}
          keyExtractor={(_, index) => index.toString()}
        />)
        : (<View style={styles.basketEmpty}>
          <Image style={styles.basketEmptyBackground} source={ImgBasketIsEmpty}/>
          <Text style={styles.basketEmptyText}>Корзина пуста</Text>
        </View>)}
      <View style={styles.basketFooter}>
        <Button
          type={'primary'}
          onPress={() => isEmpty
            ? navigation.navigate('CATALOG', {screen: 'MAIN'})
            : console.log('submit')}
        >
          {!isEmpty ? `Оформить заказ на ${totalPrice} ₽` : 'Вернуться в меню'}
        </Button>
      </View>
    </View>
  );
};

export {Basket};