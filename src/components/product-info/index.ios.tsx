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
  const {id, title, description, price, variants, image, addToCart} = props;

  const navigation = useNavigation();

  const [variantIndex, setVariantIndex] = useState<number>(0);

  const goToCatalog = () => navigation.navigate('CATALOG', {screen: 'ROOT'});

  const _addToCart = () => addToCart(1, id, variants !== undefined ? variants[variantIndex]?.id : undefined);

  return (<ScrollView contentContainerStyle={styles.productInfo}>
    <Pressable style={styles.productInfoClose} onPress={goToCatalog}>
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
        {variants !== undefined && (
          <Text style={styles.productInfoSizeValue}>{variants[variantIndex].size.value}</Text>
        )}
      </View>
      <Text style={styles.productInfoDescription}>{description}</Text>
      {variants !== undefined && (
        <Select
          items={variants.map((item, index) => ({
            title: item.size.title,
            isActive: variantIndex === index
          }))}
          setActive={setVariantIndex}
        />
      )}
    </View>
    <View style={styles.productInfoBuy}>
      <Button
        type={'PRIMARY'}
        view={'FILLED'}
        onPress={_addToCart}
      >
        Добавить в корзину за {variants !== undefined ? variants[variantIndex].price : price} ₽
      </Button>
    </View>
  </ScrollView>);
};

export {ProductInfo};