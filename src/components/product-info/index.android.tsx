/* libraries and plugins */
import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* globals */
import {COLORS} from 'globals/constants';
/* locals */
import ProductInfoProps from './interface';
import styles from './styles';
/* shared */
import {Select} from 'shared/select/index';
import {Button} from 'shared/button/index';
/* icons */
import IcoArrowBack from 'images/ico_arrow_back.svg';

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
  
  const [variant, setVariant] = useState<number>(0);
  
  return (
    <ScrollView contentContainerStyle={styles.productInfo}>
      <Pressable style={styles.productInfoClose} onPress={() => navigation.goBack()}>
        <IcoArrowBack color={COLORS.FOREGROUND_PRIMARY}/>
      </Pressable>
      <View>
        <View style={styles.productInfoImageWrapper}>
          <Image style={styles.productInfoImage} source={image}/>
        </View>
        <View style={styles.productInfoHeader}>
          <Text style={styles.productInfoTitle}>
            {title}
          </Text>
          {Array.isArray(price) && (
            <Text style={styles.productInfoSizeValue}>{price[variant].size.value}</Text>
          )}
        </View>
        <Text style={styles.productInfoDescription}>{description}</Text>
        {Array.isArray(price) && (
          <Select
            items={price.map((item, index) => ({
              title: item.size.title,
              isActive: variant === index
            }))}
            setActive={setVariant}
          />
        )}
      </View>
      <Button
        type={'primary'}
        onPress={() => addToCart({
          id,
          title,
          image,
          count: 1,
          price: Array.isArray(price) ? price[variant].value : price,
          size: Array.isArray(price) ? `${price[variant].size.title} ${price[variant].size.value}` : undefined
        })}
      >
        Добавить в корзину за {Array.isArray(price) ? price[variant].value : price} ₽
      </Button>
    </ScrollView>
  );
};

export {ProductInfo};