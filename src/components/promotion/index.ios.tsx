/* libraries and plugins */
import React, {useEffect, useRef, useState} from 'react';
import {BackHandler, Image, NativeEventSubscription, Pressable, Text, View} from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
/* locals */
import PromotionProps from './interface';
import styles from './styles';

const Promotion = ({title, description, image, close}: PromotionProps) => {
  const bottomSheetRef = useRef<BottomSheetBehavior>(null);

  const [windowHeight, setWindowHeight] = useState<number>(200);

  const closeBottomSheet = () => bottomSheetRef?.current?.snapTo(1);

  const openBottomSheet = () => bottomSheetRef?.current?.snapTo(0);

  const handleBackPress = () => {
    closeBottomSheet();

    return true;
  };

  const renderContent = () => (<View
    style={styles.promotionWindow}
    onLayout={({nativeEvent}) => setWindowHeight(nativeEvent.layout.height)}
  >
    <View style={styles.promotionImageWrapper}>
      <Image style={styles.promotionImage} source={image}/>
    </View>
    <Text style={styles.promotionTitle}>{title}</Text>
    <Text style={styles.promotionDescription}>{description}</Text>
  </View>);

  const listeners: Array<NativeEventSubscription> = [
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)
  ];

  const unsubscribe = () => listeners.forEach((listener) => listener.remove());

  useEffect(() => unsubscribe);

  useEffect(openBottomSheet, [windowHeight]);

  return (<View style={styles.promotion}>
    <BottomSheetBehavior
      ref={bottomSheetRef}
      initialSnap={1}
      snapPoints={[windowHeight, 0]}
      enabledBottomInitialAnimation={true}
      renderContent={renderContent}
      onCloseStart={close}
    />
    <Pressable style={styles.promotionOuterClickArea} onPress={closeBottomSheet}/>
  </View>);
};

export {Promotion};