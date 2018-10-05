import React from "react";
import { View } from "react-native";

import Colors from "../constants/Colors";

export default function Divider({ padding, accent, opacity, thickness }) {
  return (
    <View
      style={{
        height: thickness || 1,
        backgroundColor: accent ? Colors.lightColor : Colors.textColor,
        opacity: opacity || 0.15,
        paddingRight: padding,
        paddingLeft: padding
      }}
    />
  );
}
