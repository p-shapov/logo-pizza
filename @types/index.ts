interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {
}

declare module '*.svg' {
  const ReactComponent: SvgrComponent;
  export default ReactComponent;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const ImageSource: ImageSourcePropType;
  export default ImageSource;
}

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type GeoCoordinates = { longitude: number, latitude: number };

type TabNames = 'CATALOG' | 'CONTACTS' | 'PERSONAL_OFFICE' | 'BASKET';

type WindowNames = 'ROOT' | 'MAIN' | 'PRODUCT_INFO' | 'DELIVERY' | 'PAYMENT' | 'MODALS' | 'CONFIRMATION';

type SocialMediaType = 'VK' | 'INST' | 'OK' | 'FB' | 'YT';
