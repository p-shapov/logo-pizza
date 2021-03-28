interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const ReactComponent: SvgrComponent;
  export default ReactComponent;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const ImageSource: ImageSourcePropType
  export default ImageSource;
}

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;