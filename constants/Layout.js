import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const spacing = 8;

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  spacing,
  sideMargin: spacing * 3
};
