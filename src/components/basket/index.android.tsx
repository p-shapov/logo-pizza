/* libraries and plugins */
import React, {useState} from 'react';
import {FlatList, Image, Keyboard, ListRenderItemInfo, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import BasketProps from './interface';
import styles from './styles';
/* components */
import {PromoCodeField} from 'components/promo-code-field/index';
/* shared */
import {Button} from 'shared/button/index';
import {Counter} from 'shared/counter/index';
/* icons */
import IcoBasketTrash from 'images/ico_basket_trash.svg';
/* images */
import ImgBasketIsEmpty from 'images/img_basket_is_empty.png';

const Basket = (props: BasketProps) => {
  const {products, discount, addPromoCode, setProductCount, deleteProduct} = props;
  
  const [keyboardShown, setKeyboardShown] = useState<boolean>(false);
  
  Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true));
  Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false));
  
  const navigation = useNavigation();
  
  const totalPrice = products.reduce((acc, {price, count}) => (acc + (price * count)), 0);
  const isEmpty = products.length === 0;
  const discountApplied = discount !== undefined;
  
  const applyDiscount = (price: number) => discount !== undefined ? Math.floor(price * (1 - 0.01 * discount)) : price;
  const goToMenu = () => navigation.navigate('CATALOG', {screen: 'MAIN'});
  const goToCheckout = () => navigation.navigate('BASKET', {screen: 'DELIVERY'});
  
  const renderItem = ({item}: ListRenderItemInfo<ArrayElement<BasketProps['products']>>) => {
    const {id, title, price, count, image, size} = item;
    
    return (<View style={styles.basketProductCard}>
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
            >{applyDiscount(price)} ₽</Text>
            {discountApplied && (
              <Text style={styles.basketProductCardOldPrice}>{price} ₽</Text>
            )}
          </View>
        </View>
        <View style={styles.basketProductCardFooter}>
          <Button type={'SECONDARY'} view={'SHAPED'} onPress={() => deleteProduct(id, size)} Icon={IcoBasketTrash}/>
          <View style={styles.basketProductCardFooterGap}/>
          <Counter count={count} maxCount={10} onChange={(count) => setProductCount(id, count, size)}/>
        </View>
      </View>
    </View>);
  };
  
  const basketContent = () => (<>
    <View style={styles.basketPromoField}>
      <PromoCodeField applied={discountApplied} submitPromoCode={addPromoCode}/>
    </View>
    <FlatList
      data={products}
      renderItem={renderItem}
      contentContainerStyle={styles.basketProducts}
      keyExtractor={(_, index) => index.toString()}
    />
  </>);
  
  const basketEmpty = () => (<View style={styles.basketEmpty}>
    <Image style={styles.basketEmptyBackground} source={ImgBasketIsEmpty}/>
    <Text style={styles.basketEmptyText}>Корзина пуста</Text>
  </View>);
  
  return (
    <View style={styles.basket}>
      <View style={styles.basketHeader}>
        <Text style={styles.basketHeaderText}>Корзина</Text>
      </View>
      <View style={styles.basketDelimiter}/>
      
      {!isEmpty ? basketContent() : basketEmpty()}
      
      {!keyboardShown && <View style={styles.basketCheckout}>
        <Button
          type={'PRIMARY'}
          view={'FILLED'}
          onPress={isEmpty ? goToMenu : goToCheckout}
        >
          {!isEmpty ? `Оформить заказ на ${applyDiscount(totalPrice)} ₽` : 'Вернуться в меню'}
        </Button>
      </View>}
    </View>
  );
};

export {Basket};