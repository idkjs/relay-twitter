declare module "*.png" {
  import { ImageProps } from "react-native";
  const Image: NonNullable<ImageProps["source"]>;
  export default Image;
}
