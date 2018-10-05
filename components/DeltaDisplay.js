import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";

export default function DeltaDisplay({ titleId, value }) {
  const sign = value >= 0 ? "+ " : "- ";

  return (
    <View style={styles.container}>
      <FormattedMessage id={titleId}>
        {msg => <Text style={styles.deltaTitle}>{msg}</Text>}
      </FormattedMessage>
      <Text style={styles.deltaValue}>{sign}{Math.abs(value || 0).toFixed(2)} ⅅ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Layout.spacing * 1
  },
  deltaTitle: {
    ...Fonts.defaultAccent,
    fontWeight: "500",
    fontSize: 17
  },
  deltaValue: {
    ...Fonts.defaultAccent,
    fontSize: 28
  }
});
