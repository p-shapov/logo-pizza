import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* globals */
 import {COLORS} from '../../globals/constants';
/* locals */
import ProductInfoProps from './interface';
import styles from './styles';
/* shared */
import {Select} from '../../shared/select';
import {Button} from '../../shared/button';
/* icons */
import IcoArrowBack from '../../assets/images/ico_arrow_back.svg';

const ProductInfo = (props: ProductInfoProps) => {
  const {
    id,
    title,
    description,
    price,
    image,
    addToCart
  } = props;
  
  const navigation = useNavigation();
  
  return (
    <ScrollView contentContainerStyle={styles.productInfo}>
      <Pressable style={styles.productInfoClose} onPress={() => navigation.goBack()}>
        <IcoArrowBack color={COLORS.PRODUCT_INFO_BACKWARD_BUTTON_FOREGROUND} />
      </Pressable>
      <View>
        <Image style={styles.productInfoImage} source={image}/>
        <Text style={styles.productInfoTitle}>
          {title}
          {Array.isArray(price) && (
            <Text style={styles.productInfoSizeValue}>{price[0].size.value}</Text>
          )}
        </Text>
        <Text style={styles.productInfoDescription}>{description}</Text>
        {Array.isArray(price) && (
          <Select
            items={price.map((item, index) => ({
              title: item.size.title,
              isActive: 0 === index
            }))}
            setActive={(id) => console.log(id)}
          />
        )}
      </View>
      <Button type={'primary'} onPress={() => {
        console.log('submit');
      }}>
        Добавить в корзину {Array.isArray(price) ? price[0].value.toString() : price.toString()} ₽
      </Button>
    </ScrollView>
  );
};

export {ProductInfo};